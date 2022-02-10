"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCadastrarUsuario = void 0;
var cadastrar_usuario_controller_1 = __importDefault(require("../controllers/cadastrar-usuario-controller"));
var cadastrar_usuarios_memory_repository_1 = __importDefault(require("../repositories/memory/cadastrar-usuarios-memory-repository"));
var cadastrar_usuarios_service_1 = __importDefault(require("../services/cadastrar-usuarios-service"));
var password_crypt_memory_1 = __importDefault(require("../services/memory/password-crypt-memory"));
var makeCadastrarUsuario = function () {
    var repository = new cadastrar_usuarios_memory_repository_1.default();
    var service = new cadastrar_usuarios_service_1.default(repository);
    var passwordCrypt = new password_crypt_memory_1.default();
    return new cadastrar_usuario_controller_1.default(service, passwordCrypt);
};
exports.makeCadastrarUsuario = makeCadastrarUsuario;
//# sourceMappingURL=cadastrar-usuario.js.map