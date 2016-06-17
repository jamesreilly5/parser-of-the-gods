var React = require('react');
var ApiClient = require('./../ApiClient');

var SearchBox = React.createClass({

    doSearch:function(e){
        e.preventDefault();
        var inputValue = document.getElementById('search-input').value,
            url = this.props.apiEndpoint + '?' + this.props.queryName + '=' + inputValue;
        ApiClient.get(url, null, this.props.onSuccess);
    },

	render: function() {
		return (
            <div className='row'>
                <form className='col-md-6 col-md-offset-3' onSubmit={this.doSearch}>
                    <input id='search-input' className='search' type="text" placeholder="Search..." />
                    <input className='button' type="submit" value="Search" />
                </form>
            </div>
		)
	}
});

module.exports = SearchBox;
