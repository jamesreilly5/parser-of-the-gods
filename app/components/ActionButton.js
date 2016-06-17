var React = require('react');

var ActionButton = React.createClass({
	render: function() {
		return (
            <div className='row'>
                <input className='button col-md-8 col-md-offset-4 text-center' value={this.props.displayText} onClick={this.props.clickAction} />
            </div>
		)
	}
});

module.exports = ActionButton;
