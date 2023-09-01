"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
/** ######### ROUTER APP ######### */
var app = (0, express_1.default)();
var router = express_1.default.Router();
/** ######### CORS ######### */
app.use((0, cors_1.default)());
/** ######### REGISTERH ROOT PATH ######### */
app.use(routes_1.DEFAULT_ROOT_PATH, router);
routes_1.getRoutes.forEach(function (_a) {
    var path = _a.path, view = _a.view;
    return router.get(path, function (req, res) { return res.send("scccsdfsfsf"); });
});
routes_1.postRoutes.forEach(function (_a) {
    var path = _a.path, view = _a.view, controllerFunc = _a.controllerFunc;
    return router.post(path, controllerFunc);
});
var Run = function (port) {
    var p = port !== null && port !== void 0 ? port : routes_1.DEFAULT_RUN_PORT;
    app.listen(p, function () {
        console.log("The FISCO BCOS Server is Running: ".concat(p));
    });
};
Run();
