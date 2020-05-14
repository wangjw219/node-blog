const error = require('../config/error');

class CustomError extends Error {
    constructor(code, msg) {
        super();
        this.code = code || error.code.UNKNOW_ERROR;
        this.msg = msg || error.msg[this.code] || 'unknown error';
    }

    getErrorInfo() {
        return {
            code: this.code,
            msg: this.msg
        };
    }
}

module.exports = CustomError;