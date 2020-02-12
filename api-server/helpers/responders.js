'use strict';



/**
 * @description This function will help us to centralize our response.
 * @param {*} res 
 * @param {*} code 
 * @param {*} status 
 * @param {*} message 
 * @param {*} options 
 */
const error_responder = (res, code, status, message, options) => {
    res.status(code).send({ status: status, message: message });
}

/**
 * @description This function will help us to centralize the success response
 * @param {*} res 
 * @param {*} code 
 * @param {*} status 
 * @param {*} message 
 * @param {*} result 
 * @param {*} options 
 */
const success_responder = (res, code, status, message, result, options) => {
    res.status(code).send({ status: status, message: message, result: result });
}



module.exports = {
    error: error_responder,
    success: success_responder
}