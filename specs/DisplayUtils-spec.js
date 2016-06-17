var DisplayUtils = require('./../app/DisplayUtils.js');

describe('DisplayUtils', function() {

    describe('capitalise', function() {
        describe('when a valid string is given', function() {
            it('capitalises all letters', function() {
                expect(DisplayUtils.capitalise('hello world')).toEqual('HELLO WORLD');
                expect(DisplayUtils.capitalise('HeLlO UnIvErSe')).toEqual('HELLO UNIVERSE');
                expect(DisplayUtils.capitalise('HELLO GALAXY')).toEqual('HELLO GALAXY');
            });
        });

        describe('when a non string is given', function() {
            it('converts to string and capitalises all letters', function() {
                expect(DisplayUtils.capitalise(1)).toEqual('1');
                expect(DisplayUtils.capitalise(new Date('2016-06-17'))).toEqual('FRI JUN 17 2016 01:00:00 GMT+0100 (IST)');
            });
        });

    });

});
