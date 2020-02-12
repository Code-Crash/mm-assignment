'use strict';
/**
 * @description This file will contains the code to check the array is balance on both the sides or not.
 */
const _ = require('underscore');
const dtHelper = require('./data-type.helper');


/**
 * @description -   Given a non-empty array, return true if there is a place to 
 *                  split the array so that the sum of the numbers on one side is 
 *                  equal to the sum of the numbers on the other side.
 * 
 * canBalance([1, 1, 1, 2, 1]) → true
 * canBalance([2, 1, 1, 2, 1]) → false
 * canBalance([10, 10]) → true
 * 
 * @param {*} array 
 * @param {*} options 
 */
const balance = (array, options = {}) => {
    if (array.length) {
        let total = array.reduce((a, value) => {
            return a + value;
        });
        return total % 2 === 0;
    } else {
        throw 'Array is not Valid!';
    }
};

module.exports = {
    balance: balance
};