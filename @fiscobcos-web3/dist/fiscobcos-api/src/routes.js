"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = exports.getRoutes = exports.DEFAULT_ROOT_PATH = exports.DEFAULT_RUN_PORT = void 0;
var controllers_1 = require("./controllers");
/** ######### PORT ######### */
exports.DEFAULT_RUN_PORT = 3002;
// root path 
exports.DEFAULT_ROOT_PATH = '/fiscobcos-web3';
/** ######### GET ROUTERS LIST ######### */
exports.getRoutes = [
    { path: '/test', view: 'test', params: '' },
    { path: '/call', view: 'call', params: '' },
    { path: '/', view: 'sdf', params: '' }
];
/** ######### POST ROUTERS LIST ######### */
exports.postRoutes = [
    { path: '/test', view: 'test', controllerFunc: controllers_1.callContract },
    { path: '/test', view: 'test', controllerFunc: controllers_1.callContract },
    { path: '/test', view: 'test', controllerFunc: controllers_1.callContract },
];
