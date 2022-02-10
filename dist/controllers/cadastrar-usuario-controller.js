"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_helpers_1 = require("../helpers/http-helpers");
var CadastrarUsuarioController = /** @class */ (function () {
    function CadastrarUsuarioController(service, passwordCrypt) {
        this.service = service;
        this.passwordCrypt = passwordCrypt;
    }
    CadastrarUsuarioController.prototype.handle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, email, password, usuario, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        if (!request.body.name || !request.body.email || !request.body.password) {
                            throw new Error('Você precisa passar todos os parâmetros!');
                        }
                        _a = request.body, name_1 = _a.name, email = _a.email, password = _a.password;
                        if (email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === false) {
                            throw new Error('Email inválido!');
                        }
                        if (password.length < 8) {
                            throw new Error('A senha deve ter no mínimo 8 caracteres!');
                        }
                        if (name_1.length < 3) {
                            throw new Error('O nome deve ter no mínimo 3 caracteres!');
                        }
                        return [4 /*yield*/, this.service.emailExists(email)];
                    case 1:
                        if (_b.sent()) {
                            throw new Error('Email já cadastrado!');
                        }
                        return [4 /*yield*/, this.passwordCrypt.encrypt(password)];
                    case 2:
                        password = _b.sent();
                        return [4 /*yield*/, this.service.execute({ name: name_1, email: email, password: password })];
                    case 3:
                        usuario = _b.sent();
                        // localStorage.setItem('user_id', usuario.id);
                        return [2 /*return*/, (0, http_helpers_1.ok)('dashboard', {
                                user: {
                                    id: usuario.id,
                                    name: name_1,
                                    email: email,
                                },
                            })];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, (0, http_helpers_1.badRequest)(error_1, 'cadastro')];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CadastrarUsuarioController;
}());
exports.default = CadastrarUsuarioController;
//# sourceMappingURL=cadastrar-usuario-controller.js.map