import express from "express";
import {applyAppSettings} from "./app";

const port = process.env.PORT || 3001
export const app = express()
applyAppSettings(app)

const startApp = () => {
    app.listen(port, () => {
        console.log(`Server running on: http://localhost:${port}`)
    })
}
startApp()