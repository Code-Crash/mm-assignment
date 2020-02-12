'use strict';

const _ = require('underscore');

/**
 * @description This function will return if the array is already sorted or not.
 * @param {array} array 
 */
const isSorted = (array) => {
    let sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

/**
 * @description This function will return the indices of the array which is not sorted.
 * @param {array} array 
 */
const getUnSortedIndices = (array) => {
    let indices = [];
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] + 1) != array[i + 1]) {
            indices.push(i);
            break;
        }
    }
    for (let i = array.length; i > 0; i--) {
        if (array[i] > array[i + 1]) {
            indices.push(i);
            break;
        }
    }
    return indices;
}


const getSortedWithIndices = (array) => {
    for (var i = 0; i < array.length; i++) {
        array[i] = [array[i], i];
    }
    array.sort(function (left, right) {
        return left[0] < right[0] ? -1 : 1;
    });
    array.sortIndices = [];
    for (var j = 0; j < array.length; j++) {
        array.sortIndices.push(array[j][1]);
        array[j] = array[j][0];
    }
    return array;
}

/**
 * @description This function will return the start and end indices,
 *              which will help to sort the array
 * @param {*} array 
 */
const getIndices = (array) => {

    var sorted = _.sortBy(_.clone(array)); // Clone array and sort it.
    /**
     * Find the first indices.
     */
    let start = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != sorted[i]) {
            start = i;
            break;
        }
    }

    /**
     * Find the last indices.
     */
    let end = -1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] != sorted[i]) {
            end = i;
            break;
        }
    }

    return [start, end];
}

module.exports = {
    isSorted: isSorted,
    getUnSortedIndices: getUnSortedIndices,
    getSortedWithIndices: getSortedWithIndices,
    getIndices: getIndices
}