"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkRequestBodyImplementation = void 0;
var NetworkRequestBodyImplementation = function () {
    return function (jsonrpc, method, params) {
        var data = {
            jsonrpc: jsonrpc !== null && jsonrpc !== void 0 ? jsonrpc : '2.0',
            method: method,
            params: params,
        };
        return data;
    };
};
exports.NetworkRequestBodyImplementation = NetworkRequestBodyImplementation;
