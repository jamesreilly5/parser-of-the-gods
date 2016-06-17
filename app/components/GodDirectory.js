var React = require('react');

var God = require('./God');
var Spinner = require('./Spinner');
var SearchBox = require('./SearchBox');

var JsonParser = require('./../GodJSONParser');
var Api = require('./../ApiClient');

// In a proper deployment situation these credentials would be pulled down
// from a config in an S3 bucket. Hard-coded for the purpose of this exercise.
var API_ENDPOINT = 'https://athena-7.herokuapp.com/ancients.json';

var GodDirectory = React.createClass({

    getInitialState: function(){
		return { data: { gods: null } };
	},

	componentWillMount: function() {
		var self = this;
		Api.get(
			API_ENDPOINT,
			null,
			function(data) {
				self.setState({
				    data: JsonParser.parse(data.body)
				});
			}
		)
	},

    handleSuccess: function(event) {
        // TODO: empty array if ancients not found
        this.setState({ data: JsonParser.parse(event.body['ancients']) });
    },

    render: function() {
        if (!this.state.data.gods) { return <Spinner /> }
        return (
            <div clasName='row god-directory'>
                <h1 className='text-center'>Directory of the gods</h1>
                <SearchBox className='text-center' apiEndpoint={API_ENDPOINT} queryName={'search'} onSuccess={this.handleSuccess}/>
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
