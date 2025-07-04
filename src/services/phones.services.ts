import { CriarCliente } from "../protocols/types";
import { findClientByDocument, getPhonesByDocumentRepository, insertClient, insertPhones } from "../repositories/phones.repositories";




export async function getPhonesByDocumentServices(document: string) {
  
    const phones = await getPhonesByDocumentRepository(document);
    return phones;

}

export async function creatPhoneswithDocumentServices(data: CriarCliente) {
    
    const { name, document, number, description, carrier_id } = data;
   

    let client = await findClientByDocument(document);
    let clientId: number;
    
    if (client) {
        clientId = client.id;
    } else {
        clientId = await insertClient({ name, document });
    }


    await insertPhones({
        number,
        client_id: clientId,
        description,
        carrier_id
    });

    

    return {
        name,
        document,
        number,
        description, 
        carrier_id
    };

};