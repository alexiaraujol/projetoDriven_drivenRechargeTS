import { RechargeDb } from "protocols/types";
import db from "../database/database";



export async function insertRecharge(phone_id: number, amount: number){
    const resultado = await db.query(`INSERT INTO recharges ( phone_id, amount) VALUES ($1, $2)`, [phone_id, amount])

    
    return resultado.rows;
}


export async function getRechargesByPhoneNumber(number: string) {
    const resultado = await db.query<RechargeDb>(`SELECT 
    recharges.id AS recharge_id,
    recharges.amount AS "valorRecarga",
    recharges.created_at AS "dataRecarga",
    phones.number AS phone_number,
    phones.description,
    client.name AS "nomeCliente",
    client.document
    FROM recharges
    JOIN phones ON recharges.phone_id = phones.id
    JOIN client ON phones.client_id = client.id
    WHERE phones.number = $1;`, [number]);
    return resultado.rows;
}