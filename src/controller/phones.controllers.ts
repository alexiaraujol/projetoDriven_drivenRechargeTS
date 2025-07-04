import { Request, Response } from "express";
import { creatPhoneswithDocumentServices, getPhonesByDocumentServices } from "../services/phones.services";

export async function getPhones(req: Request, res: Response) {
    try {
        const resultado = await getPhonesByDocumentServices(req.params.document)
        console.log(resultado)
        res.send(resultado)
        
    } catch (err) {
        
        
        
        res.status(500).send(err.message)

    }
}


export async function postPhones(req: Request, res: Response) {

    const data = req.body;
    console.log("data", data)
    console.log("req.body:", req.body);
    console.log("req.body.name:", req.body?.name);
    
    try {
        const resultado = await creatPhoneswithDocumentServices(data)
        res.status(201).send(resultado)
        console.log("Resultado", resultado)

    } catch (err) {


        res.status(500).send(err.message)

    }
}
