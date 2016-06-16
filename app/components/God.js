var React = require('react');
var FontAwesome = require('react-fontawesome');

var God = React.createClass({
	render: function() {
		return (
            <div>
				<div>{this.props.name}</div>
                <div>{this.props.superPower}</div>
                <div>{this.props.dateOfDeath}</div>
            </div>
		)
	}
});

module.exports = God;
