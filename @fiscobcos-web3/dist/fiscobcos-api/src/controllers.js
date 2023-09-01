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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callContract = void 0;
var types_1 = require("./types");
var axios_1 = __importDefault(require("axios"));
var DEFAULT_JSON_RPC_VERSION = '2.0';
var PostRequirePayload = {
    method: 'POST',
    headers: {
        //'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
};
// All fisco bcos features interfaces payloads 
// See-https://fisco-bcos-documentation.readthedocs.io/zh_CN/release-2.8.0/docs/api.html#
var FiscoRequestNetworkPayloads = {
    /** CALL CHAIN */
    getClientVersionPayload: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getClientVersion'),
    getBlockNumber: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getBlockNumber'),
    getPbftView: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getPbftView'),
    getSealerList: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getSealerList'),
    getObserverList: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getObserverList'),
    getBlockHeaderByNumber: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getBlockHeaderByNumber'),
    getBlockHashByNumber: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getBlockHashByNumber'),
    getTransactionByHash: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getTransactionByHash'),
    getTransactinByBlockHashAndIndex: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getTransactinByBlockHashAndIndex'),
    getTransactionByBlockNumberAndIndex: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getTransactionByBlockNumberAndIndex'),
    getPendingTransactions: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getPendingTransactions'),
    getPendingTxSize: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getPendingTxSize'),
    /** SEND TRANSACITON */
    call: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'call'),
    sendRawTransaction: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getPendingTxSize'),
    sendRawTransactionAndGetProof: (0, types_1.NetworkRequestBodyImplementation)()(DEFAULT_JSON_RPC_VERSION, 'getPendingTxSize'),
};
/**
 * @notice  callContract  Call Initiates any call to the smart contract
 * @param   req           Request body
 * @param   res           Response body
 * @param   next
 */
var callContract = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.post('http://127.0.0.1:8545', '{"jsonrpc":"2.0","method":"call","params":[1,{"from":"0x6bc952a2e4db9c0c86a368d83e9df0c6ab481102","to":"0xd6f1a71052366dbae2f7ab2d5d5845e77965cf0d","value":"0x1","data":"0x3"}],"id":1}', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })];
            case 1:
                response = _a.sent();
                res.send(JSON.stringify(response.data));
                return [2 /*return*/];
        }
    });
}); };
exports.callContract = callContract;
