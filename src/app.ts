import express, { Request, Response } from "express";
import router from "./router/index.routes";

const app = express();
app.use(express.json());
app.use(router);

app.get("/health" , (req: Request, res: Response) => {
    res.sendStatus(200)
});

app.listen(5000, () => console.log("Server is up"));