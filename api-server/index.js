/**
 * @description This file contains the server startup scripts to listen on port 3000
 */

require('dotenv').config('./env');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const helper = require('./helpers');
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors()); // Added cord support
app.use(helmet()); // Added Helmet support for security reasons

app.get('/', function (req, res) {
    res.send('hello world')
})

/**
 * @description -
 */
app.post('/identical', function (req, res) {
    const first = req.body && req.body.first ? req.body.first : [];
    const second = req.body && req.body.second ? req.body.second : [];

    if (first.length) {
        try {
            const result = helper.identical(first, second);
            helper.success(res, 200, 'success', 'Success Message', result, {});
        } catch (error) {
            const _error = error && error.message ? error.message : error;
            helper.error(res, 500, 'error', _error, {})
        }
    } else {
        helper.error(res, 400, 'error', 'Bad Request!', {})
    }

});

/**
 * @description - This will sort the array or will inform the indices for sorting the array.
 */
app.post('/sorted', function (req, res) {
    const array = req.body && req.body.array ? req.body.array : [];
    if (array.length < 2) {
        return helper.error(res, 400, 'error', 'Bad Request!', {});
    }

    try {
        const result = helper.sorted(array, {});
        helper.success(res, 200, 'success', 'Success Message', result, {});
    } catch (error) {
        const _error = error && error.message ? error.message : error;
        helper.error(res, 500, 'error', _error, {})
    }

});

/**
 * @description - Check the balance of array on both the side, break any where in between to balance the both the sides.
 */
app.post('/balance', function (req, res) {
    const array = req.body && req.body.array ? req.body.array : [];
    try {
        const result = helper.balance(array, {});
        helper.success(res, 200, 'success', 'Success Message', result, {});
    } catch (error) {
        const _error = error && error.message ? error.message : error;
        helper.error(res, 500, 'error', _error, {})
    }

});

app.listen(process.env.PORT);
console.log(`Node server started at port: ${process.env.PORT}`);
