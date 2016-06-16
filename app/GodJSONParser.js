var parseGod = function(godData, index) {
    // Making the assumption that these values are always provided
    return {
        id: index,
        name: godData.name,
        superPower: godData.superpower,
        // TODO: Consider handling invalid date strings
        dateOfDeath: new Date(Date.parse(godData.end_of_an_era))
    };
};

module.exports = {
    parse: function(data) {
        model = { gods: [] };

        // TODO: Consider what happens when a huge array is given (i.e. should we paginate results)
        for(var i = 0; i < data.length; i++) {
            var godData = parseGod(data[i], i);
            model.gods.push(godData);
        }

        return model;
    }
};
