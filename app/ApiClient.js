var request = require('superagent');
var Promise = require('es6-promise').Promise;

module.exports = {
    get: function(url, onError, onSucess) {
        var self = this;

        return new Promise(function (resolve, reject) {
            request
            .get(url)
            .end(function(err, res) {
                if (res.status === '404') {
                    onError();
                } else {
                    onSucess(res);
                }
            });
        });
    }
};
