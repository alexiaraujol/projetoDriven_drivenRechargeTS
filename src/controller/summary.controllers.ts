import { Request, Response } from "express";
import { getSummaryByDocumentServices } from "../services/summary.services";



export async function getSummaryByDocumentController(req: Request, res:Response) {
    try {
        const document = req.params.document;
        const summary = await getSummaryByDocumentServices(document);
        res.send(summary);
    } catch (err) {
        res.status(500).send(err.message);
    }
}