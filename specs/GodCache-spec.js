var GodCache = require('./../app/GodCache.js');

describe('GodCache', function() {

    var CACHE_KEY = 'godCache',
        mockedDate = new Date('Sun Jun 19 2016 16:00:00 GMT+0100 (IST)');

    describe('get', function() {
        describe('when the cache contains an entry for "foo"', function() {
            beforeEach(function() {
                localStorage.setItem(CACHE_KEY, JSON.stringify({ foo: { bar: 'test', createdAt: '2016-06-19T15:00:00.000Z' } }));
                spyOn(window, 'Date').and.callFake(function() {
                  return mockedDate;
                });
            });

            it('returns the entry when "foo" is requested', function() {
                expect(GodCache.get('foo')).toEqual({ bar: 'test', createdAt: '2016-06-19T15:00:00.000Z' });
            });

            it('returns null when a non-existent entry is requested', function() {
                expect(GodCache.get('bar')).toEqual(null);
            });
        });

        describe('when the cache is completely empty', function() {
            it('returns null when "foo" is requested', function() {
                expect(GodCache.get('bar')).toEqual(null);
            });
        });

        describe('when the cache contains an entry older than an hour', function() {
            beforeEach(function() {
                localStorage.setItem(CACHE_KEY, JSON.stringify({ foo: { bar: 'test', createdAt: '2016-06-19T15:00:00.000Z' } }));
            });

            it('returns null because it is expired', function() {
                expect(GodCache.get('foo')).toEqual(null);
            });

            it('clears that entry in the cache because it is redundant', function() {
                GodCache.get('foo');
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual({});
            });
        });
    });

    describe('set', function() {
        beforeEach(function() {
            spyOn(window, 'Date').and.callFake(function() {
              return mockedDate;
            });
        });

        describe('when the cache is completely empty', function() {
            it('creates the cache and sets the value specified and createdAt attribute', function() {
                GodCache.set('fizz', { some: 'data', createdAt: 'Sun Jun 19 2016 16:00:00 GMT+0100 (IST)' });
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual({ fizz: { some: 'data', createdAt: '2016-06-19T15:00:00.000Z'} });
            });

            it('does not override other entries in the cache', function() {
                GodCache.set('fizz', { some: 'data', createdAt: '2016-06-19T15:00:00.000Z' });
                GodCache.set('buzz', { some: 'other data data', createdAt: '2016-06-19T15:00:00.000Z' });
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual(
                    {
                        fizz: { some: 'data', createdAt: '2016-06-19T15:00:00.000Z' },
                        buzz: { some: 'other data data', createdAt: '2016-06-19T15:00:00.000Z' }
                    }
                );
            });
        });

        describe('when the cache already contains an entry', function() {
            beforeEach(function() {
                localStorage.setItem(CACHE_KEY, JSON.stringify({ more: { data: 'to test', createdAt: '2016-06-19T15:00:00.000Z' } }));
            });

            it('does not overide the existing entry', function() {
                GodCache.set('buzz', { some: 'other data data' });
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual(
                    { more: { data: 'to test', createdAt: '2016-06-19T15:00:00.000Z' }, buzz: { some: 'other data data', createdAt: '2016-06-19T15:00:00.000Z' } }
                );
            });
        });
    });

    afterEach(function() {
        localStorage.setItem(CACHE_KEY, null);
    });

});
