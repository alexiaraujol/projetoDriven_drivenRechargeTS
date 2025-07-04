
//repository -> phoneRepository
export type NewClient = {
    name: string,
    document: string
}

export type NewPhones = {
    number: string,
    client_id: number,
    description: string,
    carrier_id: number
}


export type CriarCliente = {
    name: string,
    document: string,
    number: string,
    description: string,
    carrier_id: number
}


export type RecargaTel = {
    phone_id:number,
    amount:number
}


export type Recharge = {
    id: number;
    value: number;
    date: Date;
};

export type Carrier = {
    id: number;
    name: string;
};

export type Phone = {
    id: number;
    number: string;
    carrier: Carrier;
    recharges: Recharge[];
};

export type Summary = {
    document: string;
    phones: Phone[];
};