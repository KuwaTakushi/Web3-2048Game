import { request } from '../../utils/fetch';
import {
    NetworkRequestBody,
    NetworkRequestBodyImplementation
} from './types';

const DEFAULT_JSON_RPC_VERSION: string = '2.0';

const PostRequirePayload = {
    method: 'POST',
    headers: {
        //'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}

interface PostWithJsonPayload {
    method: string,
    headers: any,
    // JSON.stringify () => string
    body: string
}

// All fisco bcos features interfaces payloads 
// See-https://fisco-bcos-documentation.readthedocs.io/zh_CN/release-2.8.0/docs/api.html#
const FiscoRequestNetworkPayloads = {
    /** CALL CHAIN */
    getClientVersionPayload: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getClientVersion'),
    getBlockNumber: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getBlockNumber'),
    getPbftView: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getPbftView'),
    getSealerList: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getSealerList'),
    getObserverList: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getObserverList'),
    getBlockHeaderByNumber: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getBlockHeaderByNumber'),
    getBlockHashByNumber: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getBlockHashByNumber'),
    getTransactionByHash: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getTransactionByHash'),
    getTransactinByBlockHashAndIndex: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getTransactinByBlockHashAndIndex'),
    getTransactionByBlockNumberAndIndex: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getTransactionByBlockNumberAndIndex'),
    getPendingTransactions: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getPendingTransactions'),
    getPendingTxSize: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getPendingTxSize'),

    /** SEND TRANSACITON */
    call: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'call'),
    sendRawTransaction: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getPendingTxSize'),
    sendRawTransactionAndGetProof: NetworkRequestBodyImplementation()(DEFAULT_JSON_RPC_VERSION, 'getPendingTxSize'),
}

export default class FiscoNetworkLink {
    private readonly Provide: string;

    constructor(provide: string) {
        this.Provide = provide
    }
    
    getClientVersion() {}
    getBlockNumber() {}
    getPbftView() {}
    getSealerList() {}
    getObserverList() {}

    getBlockHeaderByNumber() {}
    getBlockHashByNumber() {}
    getTransactionByHash() {}
    getTransactinByBlockHashAndIndex() {}
    getTransactionByBlockNumberAndIndex() {}
    getPendingTransactions() {}
    getPendingTxSize() {}
    getCode() {}
    getTotalTransactionCount() {}
    getSystemConfigByKey() {}
    
    async call(caller: string, contractAddress: string) {
        const body = FiscoRequestNetworkPayloads.call;
        body.params = [1, {
            'from': caller,
            'to': contractAddress,
            'id': '1'
        }];
        const payload: PostWithJsonPayload = {
            method: PostRequirePayload.method,
            headers: PostRequirePayload.headers,
            body: JSON.stringify(body)
        }
        try {
            const response = await request('POST', this.Provide, payload);
            console.log("response", response)
            return response;
        } catch (err) {
            console.error(err);
        }     
    }

    async sendRawTransaction() {
        // NetworkRequestBody must match any types.
        const body: any = FiscoRequestNetworkPayloads.sendRawTransaction;
        const payload: PostWithJsonPayload = {
            method: PostRequirePayload.method,
            headers: PostRequirePayload.headers,
            body: body
        }
        try {
            const response = await request('post', this.Provide, payload);
            console.log(response)
            return response;
        } catch (err) {
            console.error(err);
        }
    }
    sendRawTransactionAndGetProof() {
        const payload:NetworkRequestBody = FiscoRequestNetworkPayloads.sendRawTransactionAndGetProof;
    }
}