var React = require('react');
var FontAwesome = require('react-fontawesome');

var God = React.createClass({
	render: function() {
		return (
            <div className='god-details col-md-4'>
				<div><span>Name: </span><span className='pull-right'>{this.props.name}</span></div>
                <div><span>Super Power: </span><span className='pull-right'>{this.props.superPower}</span></div>
                <div><span>Date of death: </span><span className='pull-right'>{this.props.dateOfDeath}</span></div>
            </div>
		)
	}
});

module.exports = God;
