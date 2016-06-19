var CACHE_KEY = 'godCache';
var TIMESTAMP_KEY = 'createdAt';
var EXPIRY_TIME_IN_MILISECONDS = 3600000;

var dateExpired = function(date) {
    // 1 hour in miliseconds
    return Math.abs(new Date() - date) > EXPIRY_TIME_IN_MILISECONDS;
};

var removeFromCache = function(cacheData, key) {
    delete godData[key];
    localStorage.setItem(CACHE_KEY, JSON.stringify(godData));
};

module.exports = {

    get: function(key) {
        godData = JSON.parse(localStorage.getItem(CACHE_KEY));
        if(!godData || !godData[key]) { return null; }

        var createdAt = new Date(godData[key][TIMESTAMP_KEY]);
        if(dateExpired(createdAt)) {
            removeFromCache(godData, key);
            return null;
        }

        return godData[key];
    },

    set: function(searchKey, hash) {
        godData = JSON.parse(localStorage.getItem(CACHE_KEY));
        if(!godData) {
            godData = {};
        }
        // Assuming we will always only contain one key
        var key = Object.keys(hash)[0];
        hash[TIMESTAMP_KEY] = new Date();
        godData[searchKey] = hash;
        localStorage.setItem(CACHE_KEY, JSON.stringify(godData))
    }
};
