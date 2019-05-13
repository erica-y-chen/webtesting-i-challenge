const enhancer = require('./enhancer.js');
// // test away!

// - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
// - a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
// - a `get()` method for use when working on the stretch problem.

describe('enhancer.js', () => { 

    describe('repair() method', () => {
        it('tests for durability', () => {
            const item = { durability: 32, enhancement: 12, name: 'sword'}
            // expect (enhancer.repair(item).toEqual(item))
            expect(enhancer.repair(item)).toEqual({...item, durability: 100})
        })
    })

    describe('succeed() method', () => {
        it('tests for enhancement success', () => {
            const item = { durability: 32, enhancement: 20, name: 'sword'}

            if(item.enhancement<20) {
                expect(enhancer.succeed(item)).toEqual({...item, enhancement: item.enhancement+1})
            }
            else {
                expect(enhancer.succeed(item)).toEqual({...item})
            }
        } )
    })

    describe('fail() method', () => {
        it('tests for enhancement failure', () => {
            const item = { durability: 32, enhancement: 1, name: 'sword'}
            if(item.enhancement<15) {
                expect(enhancer.fail(item)).toEqual({...item, durability: item.durability -5});
            }
            else if (item.enhancement > 16) {
                expect(enhancer.fail(item)).toEqual({...item, durability: item.durability-10, enhancement: item.enhancement-1});
            }
            else {
                expect(enhancer.fail(item)).toEqual({...item, durability: item.durability-10});
            }
        })
    })

})

