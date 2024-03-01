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
exports.CreatePaymentUseCase = void 0;
const Payment_1 = require("../../domain/Payment");
class CreatePaymentUseCase {
    constructor(paymentRepository, sendNotification) {
        this.paymentRepository = paymentRepository;
        this.sendNotification = sendNotification;
    }
    run(name, amount, concept) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = new Payment_1.Payment(0, name, amount, concept);
                const result = yield this.paymentRepository.createPayment(payment);
                if (result)
                    this.sendNotification.sendNotification(JSON.stringify(result));
                console.log(result);
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.CreatePaymentUseCase = CreatePaymentUseCase;
