

//Dados para criar clientes + telefones;
export type ClientWithPhoneInput = {
    name: string,
    document: string,
    number: string,
    description: string,
    carrier_id: number
};

//Dados para criar um novo cliente;
export type InsertClient = {
    name: string,
    document: string
};
//Dados para criar um novo telefone;
export type InsertPhones = {
    number: string,
    client_id: number,
    description: string,
    carrier_id: number
};

//Dados do telefone vindo do Banco de Dados com ID; 
export type PhonesFromDb = {
    id: number;
    number: string;
    description: string;
    name: string;
    document: string;
    carrier_id: string;
};

//Operadora de telefone
export type Carrier = {
    id: number;
    name: string;
};


// telefone com detalhes 
export type PhoneWithDetails = {
    id: number;
    number: string;
    carrier: Carrier;
    recharges: Recharge[];
};

//Recarga enviada pelo usuário; 
export type RecargaTel = {
    phone_id: number,
    amount: number
};

//Recarga que vem do banco de dados 
export type RechargeDb = {
    id: number,
    id_phone: number,
    id_carrier: number,
    carrier_name: string,
    id_client: number,
    recharge_value: number,
    recharge_date: Date
};


//recarga com o detalhe da data 
export type Recharge = {
    id: number;
    value: number;
    date: Date;
};



export type Summary = {
    document: string;
    phones: PhoneWithDetails[];
};


//Custum err para tratamento
export type CustomError = {
    type: string,
    message: string
};