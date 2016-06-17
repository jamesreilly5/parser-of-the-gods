module.exports = {
    get: function(key) {
        godData = JSON.parse(localStorage.getItem('godCache'));
        if(!godData || !godData[key]) { return null; }

        return godData[key];
    },

    set: function(value) {
        godData = JSON.parse(localStorage.getItem('godCache'));
        if(godData) {
            // Assuming we will always only contain one key
            var key = Object.keys(value)[0];
            godData[key] = value[key];
        } else {
            godData = value;
        }
        localStorage.setItem('godCache', JSON.stringify(godData))
    }
};
