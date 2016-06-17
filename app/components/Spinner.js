var React = require('react');

var Spinner = React.createClass({
	render: function() {
		return (
            <div className='row text-center spinner'>Loading, please wait...</div>
		)
	}
});

module.exports = Spinner;
