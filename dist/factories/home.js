"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHome = void 0;
var home_controller_1 = __importDefault(require("../controllers/home-controller"));
var makeHome = function () {
    return new home_controller_1.default();
};
exports.makeHome = makeHome;
//# sourceMappingURL=home.js.map