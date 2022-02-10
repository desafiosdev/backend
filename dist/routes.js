"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadastrar_usuario_1 = require("./factories/cadastrar-usuario");
var criar_novo_item_1 = require("./factories/criar-novo-item");
var dashboard_1 = require("./factories/dashboard");
var home_1 = require("./factories/home");
var logar_usuario_1 = require("./factories/logar-usuario");
var logout_1 = require("./factories/logout");
var manipulate_controller_1 = require("./helpers/manipulate-controller");
exports.default = (function (router) {
    router.get('/', function (req, res) { return (0, manipulate_controller_1.manipulateController)(home_1.makeHome, req, res); });
    router.get('/dashboard', function (req, res) { return (0, manipulate_controller_1.manipulateController)(dashboard_1.makeDashboard, req, res); });
    router.post('/items', function (req, res) { return (0, manipulate_controller_1.manipulateController)(criar_novo_item_1.makeCriarNovoItem, req, res); });
    router.get('/login', function (req, res) { return (0, manipulate_controller_1.manipulateController)(logar_usuario_1.makeLogarUsuario, req, res); });
    router.get('/cadastrar', function (req, res) { return (0, manipulate_controller_1.manipulateController)(cadastrar_usuario_1.makeCadastrarUsuario, req, res); });
    router.get('/logout', function (req, res) { return (0, manipulate_controller_1.manipulateController)(logout_1.makeLogout, req, res); });
    return router;
});
//# sourceMappingURL=routes.js.map