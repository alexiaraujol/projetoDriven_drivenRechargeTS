import { Request, Response } from "express";
import { creatPhoneswithDocumentServices, getPhonesByDocumentServices } from "../services/phones.services";
import { CriarCliente } from "protocols/types";


export async function getPhones(req: Request, res: Response) {

    const resultado = await getPhonesByDocumentServices(req.params.document)
    console.log(resultado)
    res.send(resultado)

}


export async function postPhones(req: Request, res: Response) {

    const data = req.body as CriarCliente


    const resultado = await creatPhoneswithDocumentServices(data)
    res.status(201).send(resultado)
    console.log("Resultado", resultado)

}
