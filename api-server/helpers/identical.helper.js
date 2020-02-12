'use strict';
/**
 * @description This file will contains the code to check the two array elements are identical or not.
 */
const _ = require('underscore');


/**
 * @description -   Write a function that takes in two non-empty arrays of integers. 
 *                  The function should find the pair of numbers (one from the first array, 
 *                  one from the second array) whose absolute difference is closest to zero. 
 *                  The function should return an array containing these two numbers, 
 *                  with the number from the first array in the first position. Assume that there will only
 *                  be one pair of numbers with the smallest difference.
 * 
 * Input: [-1, 5, 10, 20, 29, 3], [30, 134, 135, 15, 17] 
 * Output: [29, 30]
 * 
 * @param {*} first 
 * @param {*} second 
 * @param {*} options 
 */
const identical = (first, second, options = {}) => {
    if (first.length) {
        first = _.uniq(first);
        second = _.uniq(second);
        let array = [];
        _.each(first, (item) => {
            if (typeof item === 'number') {
                let value = second.indexOf((item + 1)) > -1;
                if (value) {
                    array.push(item);
                    array.push((item + 1));
                }
            }
        });
        array = _.sortBy(array);
        return array;
    } else {
        throw 'Array is not Valid!';
    }
};

module.exports = {
    identical: identical
};