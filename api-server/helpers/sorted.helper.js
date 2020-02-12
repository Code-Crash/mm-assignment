'use strict';
/**
 * @description This file will contains the code to check the two array elements are sorted or not.
 */
const _ = require('underscore');
const dtHelper = require('./data-type.helper');


/**
 * @description -   Write a function that takes in an array of integers of length at least 2. 
 *                  The function should return an array of the starting and ending indices of 
 *                  the smallest subarray in the input array that needs to be sorted in place 
 *                  in order for the entire input array to be sorted. 
 *                  If the input array is already sorted, the function should return [-1, -1]
 * 
 * Input: [-1, 5, 10, 20, 29, 3], [30, 134, 135, 15, 17] 
 * Output: [29, 30]
 * 
 * @param {*} array 
 * @param {*} options 
 */
const sorted = (array, options = {}) => {
    if (array.length) {
        let indices = dtHelper.getIndices(array);
        return indices;
    } else {
        throw 'Array is not Valid!';
    }
};

module.exports = {
    sorted: sorted
};