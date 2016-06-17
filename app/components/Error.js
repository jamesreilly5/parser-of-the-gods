var React = require('react');

var Error = React.createClass({
	render: function() {
		return (
            <div className='row text-center spinner'><h3>{this.props.errorMessage}</h3></div>
		)
	}
});

module.exports = Error;
