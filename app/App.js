var React = require('react');
var GodDirectory = require('./components/GodDirectory');
var Footer = require('./components/Footer');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<GodDirectory/>
				<Footer />
			</div>
		)
	}

});

module.exports = App;
