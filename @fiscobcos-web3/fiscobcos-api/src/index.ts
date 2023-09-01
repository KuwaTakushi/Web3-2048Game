import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import { getRoutes, postRoutes, DEFAULT_ROOT_PATH, DEFAULT_RUN_PORT } from './routes';

/** ######### ROUTER APP ######### */
const app = express();
const router = express.Router();

/** ######### CORS ######### */
app.use(cors());

/** ######### REGISTERH ROOT PATH ######### */
app.use(DEFAULT_ROOT_PATH, router);

getRoutes.forEach(({ path, view }) => router.get(path, (req, res) => res.send("scccsdfsfsf")));
postRoutes.forEach(({ path, view, controllerFunc}) => router.post(path, controllerFunc));

const Run = (port?: number) => {
    const p = port ?? DEFAULT_RUN_PORT;
    app.listen(p, () => {
        console.log(`The FISCO BCOS Server is Running: ${p}`);
    });
}

Run();