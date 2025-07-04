
import { getRechargesByPhoneNumberService, postRechargeService } from "../services/recharges.services"



export async function postRecharge (req, res){
    try {

        const resultado = await postRechargeService(req.body)
        res.status(201).send(resultado)
        console.log("Recarregamento realizado com sucesso", resultado);
        
    } catch (err) {

        res.status(500).send(err.message)
        
    }

};

export async function getRecharges(req, res) {
    const { number } = req.params;

    try {
        const resultado = await getRechargesByPhoneNumberService(number);
        if (resultado.length === 0) {
            return res.status(404).send("Nenhuma recarga encontrada para este número");
        }
        res.status(200).send(resultado);
    } catch (err) {
        res.status(500).send(err.message);
    }
}