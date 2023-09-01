import { Request, Response, NextFunction } from 'express';
import { ControllerFunc, callContract } from './controllers';

/** ######### PORT ######### */
export const DEFAULT_RUN_PORT = 3002;
// root path 
export const DEFAULT_ROOT_PATH = '/fiscobcos-web3';

/** ######### GET ROUTERS LIST ######### */
export const getRoutes = [
    { path: '/test', view:'test', params:''},
    { path: '/call', view:'call', params:''},
    { path: '/', view:'sdf', params:''}
];

/** ######### POST ROUTERS LIST ######### */
export const postRoutes = [
    { path: '/test', view:'test', controllerFunc: callContract},
    { path: '/test', view:'test', controllerFunc: callContract},
    { path: '/test', view:'test', controllerFunc: callContract},
];