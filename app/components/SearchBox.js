var React = require('react');

var SearchBox = React.createClass({

    doSearch:function(e){
        e.preventDefault();
        var inputValue = document.getElementById('search-input').value;
        this.props.doSearch(inputValue);
    },

	render: function() {
		return (
            <div className='row'>
                <form className='col-md-6 col-md-offset-3' onSubmit={this.doSearch}>
                    <input id='search-input' className='search' type="text" placeholder={this.props.placeholder} />
                    <input className='button' type="submit" value={this.props.displayText} />
                </form>
            </div>
		)
	}
});

module.exports = SearchBox;
