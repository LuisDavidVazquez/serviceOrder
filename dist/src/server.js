"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const PaymentRouter_1 = require("./payment/infrastructure/PaymentRouter");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/payments", PaymentRouter_1.paymentRouter);
app.listen(port, () => {
    signale.success("Server running in port", port);
});
