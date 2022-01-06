import { expect } from 'chai';
import C from '../src/lesson-01';
import { describe, it } from 'mocha';

interface IIndexable {
    [key: string]: any;
}

const testC: IIndexable = new C();

describe('NumberArrayTest', function () {
    it('@type {Array} points - számok tömbje', function () {
        const exists = testC['points'];
        let isNumArray: boolean = false;
        if (exists) {
            testC['points'].forEach((item: number) => {
                if (typeof item !== 'number' && !isNumArray) {
                    isNumArray = true;
                }
            });
        }
        expect(exists && !isNumArray).equal(true);
    });
});
describe('UserArrayTest', function () {
    it('@type {Array} users - minden elem egy felhasználó', function () {
        const exists = testC['users'];
        let right = true;
        if (exists) {
            testC['users'].forEach((item: {name: string, email: string}) => {
                if (
                    (typeof item.name !== 'string' || typeof item.email !== 'string')
                    &&
                    right
                ) {
                    right = false;
                }
            });
        }
        expect(exists && right).equal(true);
    });
});
describe('ProductArrayTest', function () {
    it('@type {Array} products - minden elem egy termék', function () {
        // {name: string, price: number, stock: number, active?: boolean}
        const exists = testC['products'];
        let right = true;
        if (exists) {
            testC['products'].forEach((item: {name: string, price: number, stock: number}) => {
                if (
                    (
                        typeof item.name !== 'string'
                        || typeof item.price !== 'number'
                        || typeof item.stock !== 'number'
                    )
                    &&
                    right
                ) {
                    right = false;
                }
            });
        }
        expect(exists && right).equal(true);
    });
});
describe('RoleTupleTest', function () {
    it('@type {Tuple} role - number, string, boolean', function () {
        const exists = testC['role'];
        let right = true;
        if (exists) {
            if (
                typeof testC['role'][0] !== 'number'
                || typeof testC['role'][1] !== 'string'
                || typeof testC['role'][2] !== 'boolean'
            ) {
                right = false;
            }
        }
        expect(exists && right).equal(true);
    });
});
