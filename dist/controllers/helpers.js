"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.badRequest = exports.created = exports.ok = void 0;
const interfaces_geral_1 = require("./interfaces-geral");
const ok = (body) => ({
    statusCode: interfaces_geral_1.HttpStatusCodigo.OK,
    body,
});
exports.ok = ok;
const created = (body) => ({
    statusCode: interfaces_geral_1.HttpStatusCodigo.CREATED,
    body,
});
exports.created = created;
const badRequest = (message) => {
    return {
        statusCode: interfaces_geral_1.HttpStatusCodigo.BAD_REQUEST,
        body: message,
    };
};
exports.badRequest = badRequest;
const serverError = () => {
    return {
        statusCode: interfaces_geral_1.HttpStatusCodigo.SERVER_ERROR,
        body: "Something went wrong",
    };
};
exports.serverError = serverError;
//# sourceMappingURL=helpers.js.map