"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const PaymentDependencies_1 = require("./PaymentDependencies");
exports.paymentRouter = express_1.default.Router();
exports.paymentRouter.post("/", PaymentDependencies_1.createPaymentController.run.bind(PaymentDependencies_1.createPaymentController));
