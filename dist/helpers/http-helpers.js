"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = exports.ok = exports.serverError = exports.badRequest = void 0;
var errors_1 = require("../errors");
var badRequest = function (error, file) {
    // localStorage.setItem('error', error.message);
    if (file === void 0) { file = null; }
    return {
        statusCode: 400,
        body: new errors_1.BadRequest(error.stack || ''),
        file: file || ''
    };
};
exports.badRequest = badRequest;
var serverError = function (error, file) {
    // localStorage.setItem('error', error.message);
    if (file === void 0) { file = null; }
    return {
        statusCode: 500,
        body: new errors_1.ServerError(error.stack || ''),
        file: file || ''
    };
};
exports.serverError = serverError;
var ok = function (file, data) {
    // localStorage.setItem('error', null);
    if (data === void 0) { data = null; }
    return {
        statusCode: 200,
        body: data,
        file: file,
    };
};
exports.ok = ok;
var redirect = function (file) {
    // localStorage.setItem('error', null);
    return {
        statusCode: 302,
        body: null,
        file: file,
    };
};
exports.redirect = redirect;
//# sourceMappingURL=http-helpers.js.map