var React = require('react');
var Api = require('./ApiClient');
var JsonParser = require('./GodJSONParser');
var GodDirectory = require('./components/GodDirectory');

// In a proper deployment situation these credentials would be pulled down
// from a config in an S3 bucket. Hard-coded for the purpose of this exercise.
var API_ENDPOINT = 'https://athena-7.herokuapp.com/ancients.json';

var App = React.createClass({

	getInitialState: function(){
		return {response: null };
	},

	componentWillMount: function() {
		var self = this;
		this.setState({ response: undefined });
		Api.get(
			API_ENDPOINT,
			null,
			function(data) {
				self.setState({
				    response: JsonParser.parse(data.body)
				});
			}
		)
	},

	render: function() {
		if ( !this.state.response ) {
			return <div>The response is not here yet!</div>
		}
		var godData = this.state.response;
		return (
			<div>
				<GodDirectory data={godData}/>
			</div>
		)
	}

});

module.exports = App;
