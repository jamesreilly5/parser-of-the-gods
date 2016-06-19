var React = require('react');
var FontAwesome = require('react-fontawesome');
var DisplayUtils = require('./../DisplayUtils');

var format = require('date-format');

var God = React.createClass({
	render: function() {
		return (
            <div className='col-md-4'>
				<div className='god-details '>
					<div className='god-icon'></div>
					<div className='row god-stat'>
	                    <span className='col-xs-5 stat-type'>Name:</span>
	                    <span className='col-xs-7'>{ DisplayUtils.capitalise(this.props.name) }</span>
	                </div>
	                <div className='row god-stat '>
	                    <span className='col-xs-5 stat-type'>Super Power:</span>
	                    <span className='col-xs-7'>{ DisplayUtils.capitalise(this.props.superPower) }</span>
	                </div>
	                <div className='row god-stat'>
	                    <span className='col-xs-5 stat-type'>Date of death:</span>
	                    <span className='col-xs-7'>{ DisplayUtils.capitalise(format.asString('dd/MM/yyyy', this.props.dateOfDeath)) }</span>
	                </div>
				</div>
            </div>
		)
	}
});

module.exports = God;
