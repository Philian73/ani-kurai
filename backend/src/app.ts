import {Express} from "express";
import {testsRouter} from "./routes/tests-router";
import {usersRouter} from "./routes/users-router";


export const applyAppSettings = (app: Express) => {
    app.use('/testing', testsRouter())
    app.use('/users', usersRouter())
}