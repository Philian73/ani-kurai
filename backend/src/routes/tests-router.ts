import express, {Request, Response} from "express";
import {db} from "../db/db";


export const testsRouter = () => {
    const router = express.Router()
    router.delete('/all-data', async (req: Request, res: Response) => {
        db.users.filter(user => user.id !== '0')
        res.sendStatus(204)
    })
    return router
}