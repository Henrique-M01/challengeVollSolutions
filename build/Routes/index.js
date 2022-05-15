"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CoinsRouter_1 = __importDefault(require("./CoinsRouter"));
var LoginRouter_1 = __importDefault(require("./LoginRouter"));
var ProductsRouter_1 = __importDefault(require("./ProductsRouter"));
var UserRouter_1 = __importDefault(require("./UserRouter"));
var indexRouter = (0, express_1.Router)();
indexRouter.use('/login', LoginRouter_1.default);
indexRouter.use('/products', ProductsRouter_1.default);
indexRouter.use('/coins', CoinsRouter_1.default);
indexRouter.use('/users', UserRouter_1.default);
exports.default = indexRouter;
