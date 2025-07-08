import express, { Request, Response } from "express";
import router from "./router/index.routes";
import error from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
app.use(router);
app.use(error)

app.get("/health" , (req: Request, res: Response) => {
    res.sendStatus(200)
});

app.listen(5000, () => console.log("Server is up"));