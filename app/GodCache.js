module.exports = {
    get: function(key) {
        godData = JSON.parse(localStorage.getItem('godCache'));
        if(!godData || !godData[key]) { return null; }

        return godData[key];
    },

    set: function(searchKey, hash) {
        godData = JSON.parse(localStorage.getItem('godCache'));
        if(!godData) {
            godData = {};
        }
        // Assuming we will always only contain one key
        var key = Object.keys(hash)[0];
        godData[searchKey] = hash;
        localStorage.setItem('godCache', JSON.stringify(godData))
    }
};
