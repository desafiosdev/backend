"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var CryptoMd5Adapter = /** @class */ (function () {
    function CryptoMd5Adapter() {
    }
    CryptoMd5Adapter.prototype.hash = function (value) {
        return new Promise(function (resolve) {
            var hash = crypto_1.default.createHash('md5').update(value).digest('hex');
            resolve(hash);
        });
    };
    return CryptoMd5Adapter;
}());
exports.default = CryptoMd5Adapter;
//# sourceMappingURL=crypto-md5-adapter.js.map