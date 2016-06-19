var React = require('react');

var ActionButton = React.createClass({
	render: function() {
		return (
            <input className='button action-button text-center' value={this.props.displayText} onClick={this.props.clickAction} />
		)
	}
});

module.exports = ActionButton;
