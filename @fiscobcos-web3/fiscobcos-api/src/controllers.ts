import { Request, Response, NextFunction } from 'express';
import { request } from '../../utils/fetch';
import { NetworkRequestBodyImplementation } from './types';
import axios from 'axios';

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

/** ######### CONTROLLER FUNCTION EFFECT ######### */
export type ControllerFunc = (res: Request, req: Response, next?: NextFunction) => void;

/**
 * @notice  callContract  Call Initiates any call to the smart contract  
 * @param   req           Request body
 * @param   res           Response body
 * @param   next          
 */
export const callContract: ControllerFunc = async (req: Request, res: Response, next?: NextFunction) => {
    /*const body = FiscoRequestNetworkPayloads.call;
    body.params = [1, {
        'from': "0x6bc952a2e4db9c0c86a368d83e9df0c6ab481102",
        'to': "0xd6f1a71052366dbae2f7ab2d5d5845e77965cf0d",
        'id': '1'
    }];
    const payload: PostWithJsonPayload = {
        method: PostRequirePayload.method,
        headers: PostRequirePayload.headers,
        body: JSON.stringify(body)
    }
    try {
        const response = await request('POST', "http://127.0.0.1:8545", payload);
        console.log("response", response)
        return response;
    } catch (err) {
        console.error(err);
    }     */ 
    const response = await axios.post(
        'http://127.0.0.1:8545',
        '{"jsonrpc":"2.0","method":"call","params":[1,{"from":"0x6bc952a2e4db9c0c86a368d83e9df0c6ab481102","to":"0xd6f1a71052366dbae2f7ab2d5d5845e77965cf0d","value":"0x1","data":"0x3"}],"id":1}',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
    res.send(JSON.stringify(response.data));
};