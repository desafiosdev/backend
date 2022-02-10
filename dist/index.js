"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
var router = (0, express_2.Router)();
router = (0, routes_1.default)(router);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use(router);
app.listen(port, function () {
    console.log("App listening on: http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map