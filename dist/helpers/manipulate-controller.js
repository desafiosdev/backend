"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.manipulateController = void 0;
var path = __importStar(require("path"));
var manipulateController = function (factory, req, res) {
    var params = req.params || [];
    var query = req.query || [];
    var body = params || query;
    var request = { body: body };
    var controller = factory();
    controller.handle(request).then(function (response) {
        res = res.status(response.statusCode);
        if (response.statusCode === 302) {
            res.redirect(response.file || '');
            return;
        }
        var file = response.file || '';
        if (file) {
            file = file.indexOf('.') > -1 ? file : "".concat(file, ".html");
            file = path.join(__dirname, '..', '..', 'views', file);
            res.sendFile(file, response.body);
            return;
        }
        res.json(response.body);
    });
};
exports.manipulateController = manipulateController;
//# sourceMappingURL=manipulate-controller.js.map