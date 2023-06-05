import {Express} from "express";
import {testsRouter} from "./routes/tests-router";


export const applyAppSettings = (app: Express) => {
    app.use('/testing', testsRouter())
}