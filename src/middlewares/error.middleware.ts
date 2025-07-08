import { NextFunction, Request, Response } from "express";
import { CustomError } from "../protocols/types";

export default function error(
    err: CustomError, 
    req: Request, 
    res: Response, 
    next: NextFunction)
{

    if(err.type === "Conflit"){
        res.status(409).send(err.message)
        return
    }
      if(err.type === "Not found"){
        res.status(404).send(err.message)
        return
    }
      if(err.type === "Erro ao criar o usuário"){
        res.status(400).send(err.message)
        return
    }
      if(err.type === "Indisponibilidade"){
        res.status(422).send(err.message)
        return
    }
          if(err.type === "Erro na função"){
        res.status(400).send(err.message)
        return
    }

    console.log(err)
    res.status(500).send(err.message)
    return
};
