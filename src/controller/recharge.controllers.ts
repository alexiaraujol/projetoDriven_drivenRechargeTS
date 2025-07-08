
import { RecargaTel } from "protocols/types";
import { getRechargesByPhoneNumberService, postRechargeService } from "../services/recharges.services"
import { Request, Response } from "express";



export async function postRecharge(req: Request, res: Response) {


    const data = req.body as RecargaTel;

    const resultado = await postRechargeService(data)
    res.status(201).send(resultado)
    console.log("Recarregamento realizado com sucesso", resultado);



};

export async function getRecharges(req: Request, res: Response) {
    const { number } = req.params;


    const resultado = await getRechargesByPhoneNumberService(number);
    if (resultado.length === 0) {
        res.status(404).send("Nenhuma recarga encontrada para este número");
        return
    }
    res.status(200).send(resultado);

}