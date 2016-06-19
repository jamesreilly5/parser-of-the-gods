var React = require('react');

var SearchBox = React.createClass({

    doSearch:function(e){
        e.preventDefault();
        var inputValue = document.getElementById('search-input').value;
        this.props.doSearch(inputValue);
    },

	render: function() {
		return (
            <form className='search-box' onSubmit={this.doSearch}>
                <input id='search-input' className='search' type="text" placeholder={this.props.placeholder} />
                <input className='button search-button' type="submit" value={this.props.displayText} />
            </form>
		)
	}
});

module.exports = SearchBox;
