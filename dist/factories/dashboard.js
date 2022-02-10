"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDashboard = void 0;
var dashboard_controller_1 = __importDefault(require("../controllers/dashboard-controller"));
var dashboard_memory_repository_1 = __importDefault(require("../repositories/memory/dashboard-memory-repository"));
var dashboard_service_1 = __importDefault(require("../services/dashboard-service"));
var avatar_memory_service_1 = __importDefault(require("../services/memory/avatar-memory-service"));
var makeDashboard = function () {
    var repository = new dashboard_memory_repository_1.default();
    var avatarService = new avatar_memory_service_1.default();
    var service = new dashboard_service_1.default(repository, avatarService);
    return new dashboard_controller_1.default(service);
};
exports.makeDashboard = makeDashboard;
//# sourceMappingURL=dashboard.js.map