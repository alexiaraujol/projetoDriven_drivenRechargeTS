
import db from "../database/database";
import { RecargaTel } from "../protocols/types";
import { getRechargesByPhoneNumber, insertRecharge } from "../repositories/recharges.repositories";



export async function postRechargeService({phone_id, amount}: RecargaTel){

   const findPhoneId = await db.query(`SELECT * FROM phones WHERE id = $1`, [phone_id]);
    if (findPhoneId.rows.length === 0) {
        throw new Error("Telefone não encontrado");
    }

    await insertRecharge(phone_id, amount)
    
    return { phone_id, amount };


};

export async function getRechargesByPhoneNumberService(number: string) {
    
    const resultado = await getRechargesByPhoneNumber(number);
    return resultado;
}