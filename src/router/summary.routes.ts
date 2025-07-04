import { Router } from "express";
import { getSummaryByDocumentController } from "../controller/summary.controllers";
;


const summaryRouter = Router();

summaryRouter.get("/:document",getSummaryByDocumentController);

export default summaryRouter;

