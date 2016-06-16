var JsonParser = require('./../app/GodJSONParser.js');

describe('GodJSONParser', function() {

    describe('parse', function() {
        var validResponseData = JSON.stringify([
            { name: 'Zeus', superpower: 'Unbeatable', end_of_an_era: '1014-11-17T00:00:00.000+00:00' },
            { name: 'Athena', superpower: 'Wisdom', end_of_an_era: '0012-10-10T00:00:00.000+00:00' }
        ]);
        var expectedOutput = {
            gods: [
                { id: 0, name: 'Zeus', superPower: 'Unbeatable', dateOfDeath: new Date('1014-11-17') },
                { id: 1, name: 'Athena', superPower: 'Wisdom', dateOfDeath: new Date('0012-10-10') }
            ]
        };

        describe('when valid data is supplied', function() {
            it('parses the expected output', function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });
    });

});
