"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoginController_1 = __importDefault(require("../controllers/LoginController"));
var loginRouter = (0, express_1.Router)();
loginRouter.post('/create', LoginController_1.default.createLogin);
exports.default = loginRouter;
