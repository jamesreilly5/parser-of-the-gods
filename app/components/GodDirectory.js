var React = require('react');

var God = require('./God');
var Spinner = require('./Spinner');
var SearchBox = require('./SearchBox');
var Error = require('./Error');
var ActionButton = require('./ActionButton');

var JsonParser = require('./../GodJSONParser');
var Api = require('./../ApiClient');
var GodCache = require('./../GodCache');
var ApiClient = require('./../ApiClient');

// In a proper deployment situation these credentials would be pulled down
// from a config in an S3 bucket. Hard-coded for the purpose of this exercise.
var API_ENDPOINT = 'https://athena-7.herokuapp.com/ancients.json';
var ERROR_ENDPOINT = 'https://athena-7.herokuapp.com/ancients.json?error=true';

var GodDirectory = React.createClass({

    getInitialState: function(){
		return { data: { gods: null }, error: null };
	},

	componentWillMount: function() {
		var self = this;
		Api.get(API_ENDPOINT, this.handleError, this.handleBlanketSearchSuccess);
	},

    errorClickAction: function() {
		Api.get(ERROR_ENDPOINT, this.handleError, null);
    },

    doSearch: function(searchTerm) {
        var cachedValue = GodCache.get(searchTerm),
            url = API_ENDPOINT + '?search=' + searchTerm;

        if(cachedValue) {
            // TODO: Don't hard code the hash, figure out more elegant way to parse two formats of results.
            this.handleSearchSuccess(searchTerm, { body: { ancients: cachedValue } })
        } else {
            // Bind null for first param as we don't care about 'this'
            ApiClient.get(url, this.handleError, this.handleSearchSuccess.bind(null, searchTerm));
        }
    },

    // Structure of json is different to hitting endpoint without search query param.
    handleBlanketSearchSuccess: function(event) {
        this.setState({ data: JsonParser.parse(event.body) });
    },

    // Structure of json is different to hitting endpoint without search query param.
    handleSearchSuccess: function(searchTerm, event) {
        // TODO: empty array if ancients not found
        // TODO: Don't set value in cache again if value was retrieved from cache in first place (break out method?)
        GodCache.set(searchTerm, event.body['ancients']);
        this.setState({ data: JsonParser.parse(event.body['ancients']) });
    },

    handleError: function(event) {
        this.setState({ error: event.body['error'] });
    },

    render: function() {
        if (this.state.error) { return <Error errorMessage={this.state.error} /> }
        if (!this.state.data.gods) { return <Spinner /> }

        return (
            <div clasName='row god-directory'>
                <h1 className='text-center'>Directory of the gods</h1>
                <div>
                    <SearchBox queryApi={this.doSearch}/>
                    <ActionButton displayText='Hit me to see the error endpoint' clickAction={this.errorClickAction} />
                </div>
                {
                    this.state.data.gods.map(function(god) {
                        return <God key={god.id} name={god.name}
                            superPower={god.superPower} dateOfDeath={god.dateOfDeath.toString()} />
                    })
                }
            </div>
        )
    }
});

module.exports = GodDirectory;
