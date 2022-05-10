"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoginRouter_1 = __importDefault(require("./LoginRouter"));
var ProductsRouter_1 = __importDefault(require("./ProductsRouter"));
var indexRouter = (0, express_1.Router)();
indexRouter.use('/login', LoginRouter_1.default);
indexRouter.use('/products', ProductsRouter_1.default);
exports.default = indexRouter;
