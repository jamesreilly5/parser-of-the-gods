var GodCache = require('./../app/GodCache.js');

describe('GodCache', function() {

    var CACHE_KEY = 'godCache';

    describe('get', function() {
        describe('when the cache contains an entry for "foo"', function() {
            beforeEach(function() {
                localStorage.setItem(CACHE_KEY, JSON.stringify({ foo: { bar: 'test' } }));
            });

            it('returns the entry when "foo" is requested', function() {
                expect(GodCache.get('foo')).toEqual({ bar: 'test' });
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
    });

    describe('set', function() {
        describe('when the cache is completely empty', function() {
            it('sets creates the cache and sets the value specified', function() {
                GodCache.set({ fizz: { some: 'data' } });
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual({ fizz: { some: 'data'} });
            });

            it('does not override other entries in the cache', function() {
                GodCache.set({ fizz: { some: 'data' } });
                GodCache.set({ buzz: { some: 'other data data' } });
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual(
                    { fizz: { some: 'data'}, buzz: { some: 'other data data' } }
                );
            });
        });

        describe('when the cache already contains an entry', function() {
            beforeEach(function() {
                localStorage.setItem(CACHE_KEY, JSON.stringify({ more: { data: 'to test' } }));
            });

            it('does not overide the existing entry', function() {
                GodCache.set({ buzz: { some: 'other data data' } });
                expect(JSON.parse(localStorage.getItem(CACHE_KEY))).toEqual(
                    { more: { data: 'to test' }, buzz: { some: 'other data data' } }
                );
            });
        });
    });

    afterEach(function() {
        localStorage.setItem(CACHE_KEY, null);
    });

    // TODO: updates the cache when not equal
    // TODO: Sets the cache when empty
    // TODO: Expire cache

});
