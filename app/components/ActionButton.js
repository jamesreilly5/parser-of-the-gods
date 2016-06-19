var React = require('react');

var ActionButton = React.createClass({
	render: function() {
		return (
            <input className='button action-button col-md-8 col-md-offset-4 text-center' value={this.props.displayText} onClick={this.props.clickAction} />
		)
	}
});

module.exports = ActionButton;
