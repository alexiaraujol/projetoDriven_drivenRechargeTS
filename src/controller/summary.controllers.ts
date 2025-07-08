import { Request, Response } from "express";
import { getSummaryByDocumentServices } from "../services/summary.services";



export async function getSummaryByDocumentController(req: Request, res: Response) {

    const document = req.params.document;
    const summary = await getSummaryByDocumentServices(document);
    res.send(summary);

}