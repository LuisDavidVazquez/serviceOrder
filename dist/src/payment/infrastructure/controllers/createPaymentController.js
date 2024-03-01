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
exports.CreatePaymentController = void 0;
class CreatePaymentController {
    constructor(createPaymentUseCase) {
        this.createPaymentUseCase = createPaymentUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const payment = yield this.createPaymentUseCase.run(data.id, data.name, data.amount, data.concept);
                if (payment)
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: payment === null || payment === void 0 ? void 0 : payment.id,
                            name: payment === null || payment === void 0 ? void 0 : payment.name,
                            description: payment === null || payment === void 0 ? void 0 : payment.amount,
                            price: payment === null || payment === void 0 ? void 0 : payment.concept,
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "The record could not be added",
                    });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "An error occurred",
                    msn: error,
                });
            }
        });
    }
}
exports.CreatePaymentController = CreatePaymentController;
