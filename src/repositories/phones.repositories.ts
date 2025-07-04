import db from "database/database";



export async function insertClient ( {name,document}){
    const resultado = await db.query(`INSERT INTO client (name, document) VALUES ($1,$2) RETURNING id;`,[name,document])

    return resultado.rows[0].id;

}

export async function insertPhones( { number, client_id, description, carrier_id }) {

    const resultado = await db.query(`INSERT INTO phones (number, client_id, description, carrier_id)
    VALUES ($1, $2, $3, $4);`, [number, client_id, description, carrier_id]);
    return resultado;



}

export async function getPhonesByDocumentRepository(document: string) {
 console.log("document recebido no Repositorie:", document);
    const resultado = await db.query(`SELECT 
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
    const resultado = await db.query(
        `SELECT id FROM client WHERE document = $1;`,
        [document]
    );
    return resultado.rows[0];
}
