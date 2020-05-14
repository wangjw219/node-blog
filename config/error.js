const CODE_SUCCESS = 1;
const CODE_UNKNOW_ERROR = 4000;
const CODE_MONGO_DUPLICATE_KEY = 4001;
const CODE_USER_NOT_EXIST = 4002;
const CODE_USER_PASSWORD_WRONG = 4003;
const CODE_COMMON_ERROR = 5000;

const MSG_SUCCESS = 'success';
const MSG_UNKNOW_ERROR = 'unknow error';
const MSG_MONGO_DUPLICATE_KEY = 'duplicate key';
const MSG_USER_NOT_EXIST = '该用户不存在';
const MSG_USER_PASSWORD_WRONG = '用户名或者密码错误';
const MSG_COMMON_ERROR = '系统繁忙，请重试';

module.exports = {
    // 错误码
    code: {
        SUCCESS: 1,
        UNKNOW_ERROR: 4000,
        MONGO_DUPLICATE_KEY: 4001,
        USER_NOT_EXIST: 4002,
        USER_PASSWORD_WRONG: 4003,
        COMMON_ERROR: 5000
    },
    // 错误信息
    msg: {
        SUCCESS: 'success',
        UNKNOW_ERROR: 'unknow error',
        MONGO_DUPLICATE_KEY: 'duplicate key',
        USER_NOT_EXIST: '该用户不存在',
        USER_PASSWORD_WRONG: '用户名或者密码错误',
        COMMON_ERROR: '系统繁忙，请重试'
    }
};