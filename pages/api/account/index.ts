// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "@/server/db/client"
import { Result, ResultFailure, ResultSuccess, Status } from '@/types/result'
import { IsEmail, Length, MinLength, validate } from 'class-validator'



class QueryUserDto {
    @Length(10, 20, {
        message: '账号长度不规范!'
    })
    account: string;

    @MinLength(6, {
        message: '密码长度最短不低于6位!',
    })
    password: string
}

type User = {
    name: string
}



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result<User>>
) {
    console.log("method: ", req.method)
    if (req.method !== "POST") {
        res.status(405).send({ code: 405, msg: 'Only POST requests allowed', data: null })
        return
    }
    const { account, password } = req.body
    const params = new QueryUserDto()
    params.account = account
    params.password = password
    validate(params, { validationError: { target: false } }).then(errors => {
        if (errors.length > 0) {
            res.status(200).json(ResultFailure(Status.Validate, errors.at(1).constraints["minLength"]))
        } else {
            res.status(200).json(ResultSuccess({ name: "li" }))
        }
    })
}
