var React = require('react');

var Spinner = React.createClass({
	render: function() {
		return (
			<div className='spinner'>
				<div className='god-icon'></div>
				<div className='row text-center spinner'><h1>Brace yourselves, the Gods are coming...</h1></div>
			</div>
		)
	}
});

module.exports = Spinner;
