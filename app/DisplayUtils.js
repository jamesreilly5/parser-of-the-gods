module.exports = {
    capitalise: function(text) {
        // We could check type using typeof here either but it's less readable
        // and unlikely a huge difference in performance for the data we're currently dealing with
        return text.toString().toUpperCase();
    }
};
