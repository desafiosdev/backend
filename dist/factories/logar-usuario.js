"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLogarUsuario = void 0;
var logar_usuario_controller_1 = __importDefault(require("../controllers/logar-usuario-controller"));
var logar_usuario_memory_repository_1 = __importDefault(require("../repositories/memory/logar-usuario-memory-repository"));
var logar_usuario_service_1 = __importDefault(require("../services/logar-usuario-service"));
var password_crypt_memory_1 = __importDefault(require("../services/memory/password-crypt-memory"));
var makeLogarUsuario = function () {
    var passwordService = new password_crypt_memory_1.default();
    var repository = new logar_usuario_memory_repository_1.default();
    var service = new logar_usuario_service_1.default(passwordService, repository);
    return new logar_usuario_controller_1.default(service);
};
exports.makeLogarUsuario = makeLogarUsuario;
//# sourceMappingURL=logar-usuario.js.map