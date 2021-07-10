// * Function Response Message 
const resmsg = (res, status, statusCode, err, result) => {
    res.status(`${statusCode}`).json({
        status : status,
        status_code : statusCode,
        message_error : err.message || err || '',
        result : result || ''
    })
}

// * Function Error Message
const errMessage = (variable = '') => {
    msg = `Cannot read property ${variable} of undefined`
    return msg
}

// * Function utils 
module.exports.resmsg = resmsg
module.exports.errMessage =errMessage