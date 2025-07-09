import { ClientWithPhoneInput, CustomError, PhonesFromDb } from "../protocols/types";
import { findClientByDocument, findPhonesbyNumber, getPhonesByDocumentRepository, insertClient, insertPhones } from "../repositories/phones.repositories";




export async function getPhonesByDocumentServices(document: string): Promise<PhonesFromDb[]> {

    const phones = await getPhonesByDocumentRepository(document);
    return phones;

}

export async function creatPhoneswithDocumentServices(data: ClientWithPhoneInput) {

    const { name, document, number, description, carrier_id } = data;


    

    let client = await findClientByDocument(document);

    let clientId: number;

    if (!client || client.length === 0) {
        clientId = await insertClient({ name, document });
        client = [{ id: clientId }];
        
    } else {
        clientId = client[0].id;
    }

 

    let numberExist = await findPhonesbyNumber(number)
 
    if (numberExist) {
        throw {
            type: "Conflict",
            message: "O telefone já existe na base de dados"
        } as CustomError

    }

    let userValid = await getPhonesByDocumentRepository(document);

   

    if (userValid?.length >= 3) {
        throw {
            type: "Conflit",
            message: "Esse usuário já possui 3 telefones cadastrados!"
        } as CustomError
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