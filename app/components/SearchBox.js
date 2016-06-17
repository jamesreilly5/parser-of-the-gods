var React = require('react');

var SearchBox = React.createClass({
	render: function() {
		return (
            <div className='row'>
                <form className='col-md-6 col-md-offset-3'>
                    <input className='search' type="text" placeholder="Search..." required />
                    <input className='button' type="button" value="Search" />
                </form>
            </div>
		)
	}
});

module.exports = SearchBox;
