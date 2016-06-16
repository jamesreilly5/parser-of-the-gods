var React = require('react');
var God = require('./God');

var GodDirectory = React.createClass({
    render: function() {
        debugger;
        return (
            <div clasName='row'>
                {
                    this.props.data.gods.map(function(god) {
                        return <God key={god.id} name={god.name}
                            superPower={god.superPower} dateOfDeath={god.dateOfDeath.toString()} />
                    })
                }
            </div>
        )
    }
});

module.exports = GodDirectory;
