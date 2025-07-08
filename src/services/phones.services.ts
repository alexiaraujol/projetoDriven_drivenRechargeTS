import { CriarCliente, CustomError, Phones } from "../protocols/types";
import { findClientByDocument, getPhonesByDocumentRepository, insertClient, insertPhones } from "../repositories/phones.repositories";




export async function getPhonesByDocumentServices(document: string): Promise<Phones[]> {

    const phones = await getPhonesByDocumentRepository(document);
    return phones;

}

export async function creatPhoneswithDocumentServices(data: CriarCliente) {

    const { name, document, number, description, carrier_id } = data;


    let client = await findClientByDocument(document);
    let clientId: number;

    let numberExist = await findClientByDocument(data.number)
    if (numberExist) {
        throw {
            type: "Conflict",
            message: "O telefone já existe na base de dados"
        } as CustomError

    }

     let userValid = await findClientByDocument(data.document)

    if (userValid.length >= 3) {
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