"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var PORT = process.env.PORT;
App_1.default.listen(PORT, function () { return console.log("Server run on ".concat(PORT)); });
