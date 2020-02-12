'use strict';

/**
 * This file contains all the linker to other helper modules
 */


const identical = require('./identical.helper').identical;
const sorted = require('./sorted.helper').sorted;
const balance = require('./balance.helper').balance;
const error = require('./responders').error;
const success = require('./responders').success;
const isSorted = require('./data-type.helper').isSorted;

module.exports = {
    identical: identical,
    error: error,
    success: success,
    isSorted: isSorted,
    sorted: sorted,
    balance: balance
}