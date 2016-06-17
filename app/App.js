var React = require('react');
var GodDirectory = require('./components/GodDirectory');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<GodDirectory/>
			</div>
		)
	}

});

module.exports = App;
