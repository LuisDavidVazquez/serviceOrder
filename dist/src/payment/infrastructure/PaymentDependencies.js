"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentController = exports.createPaymentUseCase = exports.servicesNotification = exports.mysqlPaymentRepository = void 0;
const MysqlPaymentRepository_1 = require("./repositories/MysqlPaymentRepository");
const CreatePaymentUseCase_1 = require("../application/CreatePaymentUseCase");
const CreatePaymentController_1 = require("./controllers/CreatePaymentController");
const NotificationHelper_1 = require("./helpers/NotificationHelper");
exports.mysqlPaymentRepository = new MysqlPaymentRepository_1.MysqlPaymentRepository();
exports.servicesNotification = new NotificationHelper_1.NotificationNewPayment();
exports.createPaymentUseCase = new CreatePaymentUseCase_1.CreatePaymentUseCase(exports.mysqlPaymentRepository, exports.servicesNotification);
exports.createPaymentController = new CreatePaymentController_1.CreatePaymentController(exports.createPaymentUseCase);