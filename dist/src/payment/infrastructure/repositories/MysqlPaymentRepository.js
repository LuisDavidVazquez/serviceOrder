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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlPaymentRepository = void 0;
const mysql_1 = require("../../../database/mysql");
const Payment_1 = require("../../domain/Payment");
class MysqlPaymentRepository {
    createPayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO payment (name, amount, concept) VALUES (?, ?, ?)";
            const params = [payment.name, payment.amount, payment.concept];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                const paymentObject = new Payment_1.Payment(result.insertId, payment.name, payment.amount, payment.concept);
                return paymentObject;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.MysqlPaymentRepository = MysqlPaymentRepository;
