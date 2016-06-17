var React = require('react');
var God = require('./God');

var GodDirectory = React.createClass({
    render: function() {
        return (
            <div clasName='row'>
                <h1 className='text-center'>Directory of the gods</h1>
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
