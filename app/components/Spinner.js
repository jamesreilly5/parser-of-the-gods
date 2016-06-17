var React = require('react');

var Spinner = React.createClass({
	render: function() {
		return (
            <div className='row text-center spinner'><h3>Brace yourselves, the gods are coming...</h3></div>
		)
	}
});

module.exports = Spinner;
