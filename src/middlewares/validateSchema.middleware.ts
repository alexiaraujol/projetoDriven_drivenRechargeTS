import { NextFunction, Request, Response } from "express"
import { Schema } from "joi"

export function validateSchema(schema: Schema) {

    return (req: Request, res: Response, next: NextFunction): void => {
        const validation = schema.validate(req.body, {
            abortEarly: false
        })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            res.status(422).send(errors)
            return
        }
        next()

    }


}