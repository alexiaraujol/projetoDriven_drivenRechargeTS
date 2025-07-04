import  { Router } from 'express';
import phonesRouter from './phones.routes';
import rechargesRouter from './recharges.routes';
import summaryRouter from './summary.routes';




const router = Router();
router.use(phonesRouter);
router.use("/recharges", rechargesRouter);
router.use("/summary",summaryRouter)
export default router;