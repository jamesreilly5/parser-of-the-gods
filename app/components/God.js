var React = require('react');
var FontAwesome = require('react-fontawesome');
var DisplayUtils = require('./../DisplayUtils');

var God = React.createClass({
	render: function() {
		return (
            <div className='god-details col-md-4'>
				<div>
                    <span>{ DisplayUtils.capitalise('Name:') }</span>
                    <span className='pull-right'>{ DisplayUtils.capitalise(this.props.name) }</span>
                </div>
                <div>
                    <span>{ DisplayUtils.capitalise('Super Power:') }</span>
                    <span className='pull-right'>{ DisplayUtils.capitalise(this.props.superPower) }</span>
                </div>
                <div>
                    <span>{ DisplayUtils.capitalise('Date of death:') }</span>
                    <span className='pull-right'>{ DisplayUtils.capitalise(this.props.dateOfDeath) }</span>
                </div>
            </div>
		)
	}
});

module.exports = God;
