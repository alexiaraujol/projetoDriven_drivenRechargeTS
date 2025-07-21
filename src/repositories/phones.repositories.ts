import db from "../database/database";
import {  ClientId, Document, InsertClient, InsertClientwithDetails, InsertPhones, Number, PhonesFromDb } from "../protocols/types";


export async function insertClient ( {name,document}:InsertClient ): Promise<number>{
    const resultado = await db.query<InsertClientwithDetails>(`INSERT INTO client (name, document) VALUES ($1,$2) RETURNING id;`,[name,document])

    
    return resultado.rows[0].id;

}

export async function insertPhones( { number, client_id, description, carrier_id }:InsertPhones ) {

    const resultado = await db.query<InsertPhones>(`INSERT INTO phones (number, client_id, description, carrier_id)
    VALUES ($1, $2, $3, $4);`, [number, client_id, description, carrier_id]);

    
    


}

export async function getPhonesByDocumentRepository(document: string) : Promise<PhonesFromDb[]> {
 
    const resultado = await db.query<PhonesFromDb>(`SELECT 
    phones.id AS phone_id,
    phones.number,
    phones.description,
    client.name AS name,
	client.document AS document,
    carriers.name AS operadora
    FROM phones
    JOIN client ON phones.client_id = client.id
    JOIN carriers ON phones.carrier_id = carriers.id 
    WHERE client.document = $1;`, [document]);

  
    return resultado.rows;

};


export async function findClientByDocument(document: string) {
    const resultado = await db.query<ClientId>(
        `SELECT id FROM client WHERE document = $1;`,
        [document]
    );

    return resultado.rows;
}

export async function findPhonesbyNumber(number: string){

    const resultado = await db.query<Number>(
        `SELECT id FROM phones WHERE number = $1;`,
        [number]
    );
    return resultado.rows[0];



}