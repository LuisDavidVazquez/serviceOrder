"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationNewPayment = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class NotificationNewPayment {
    constructor() {
        this.options = {
            vhost: process.env.AMQP_VHOST,
            username: process.env.AMQP_USERNAME,
            password: process.env.AMQP_PASSWORD,
            port: process.env.AMQP_PORT,
        };
        this.url = process.env.AMQP_URL;
        this.exch = process.env.AMQP_EXCH;
    }
    sendNotification(message) {
        return __awaiter(this, void 0, void 0, function* () {
            //Opción de conexión para instancia EC2
            const conn = yield amqplib_1.default.connect(this.url, this.options);
            //Opción de conexión para cloudamqp
            //const conn  = await amqplib.connect(this.server);
            const channel = yield conn.createChannel();
            const status = yield channel.publish(this.exch, "", Buffer.from(message));
            return status;
        });
    }
}
exports.NotificationNewPayment = NotificationNewPayment;
