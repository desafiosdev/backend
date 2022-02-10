"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLogout = void 0;
var logout_controller_1 = __importDefault(require("../controllers/logout-controller"));
var logout_service_1 = __importDefault(require("../services/logout-service"));
var makeLogout = function () {
    var service = new logout_service_1.default();
    return new logout_controller_1.default(service);
};
exports.makeLogout = makeLogout;
//# sourceMappingURL=logout.js.map