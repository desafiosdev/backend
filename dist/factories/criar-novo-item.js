"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCriarNovoItem = void 0;
var criar_novo_item_controller_1 = __importDefault(require("../controllers/criar-novo-item-controller"));
var criar_novo_item_memory_repository_1 = __importDefault(require("../repositories/memory/criar-novo-item-memory-repository"));
var criar_novo_item_service_1 = __importDefault(require("../services/criar-novo-item-service"));
var makeCriarNovoItem = function () {
    var repository = new criar_novo_item_memory_repository_1.default();
    var service = new criar_novo_item_service_1.default(repository);
    return new criar_novo_item_controller_1.default(service);
};
exports.makeCriarNovoItem = makeCriarNovoItem;
//# sourceMappingURL=criar-novo-item.js.map