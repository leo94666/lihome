// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "@/server/db/client"
import { Result, ResultFailure, ResultSuccess, Status } from '@/types/result'
import { IsEmail, Length, MinLength, ValidationError, validate } from 'class-validator'

import { _ } from "lodash"

import { plainToInstance } from 'class-transformer';
import { User } from '@/types/intefaces'

class QueryUserDto {

    @IsEmail()
    email: string;

    @MinLength(6, {
        message: '密码长度最短不低于6位!',
    })
    password: string
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result<User>>
) {

    if (req.method !== "POST") {
        res.status(405).send({ code: 405, msg: 'Only POST requests allowed', data: null })
        return
    }

    const params = plainToInstance(QueryUserDto, req.body);
    validate(params).then(async errors => {
        if (errors.length > 0) {
            res.status(200).json(ResultFailure(Status.Validate, _.values(_.head(errors)?.constraints)[0]))
        } else {

            const user = await prisma?.user.findUnique({
                where: {
                    email: params.email
                },
                include: {
                    config: {
                        include: {
                            category: {
                                include: {
                                    labels: true
                                }
                            }
                        }
                    }
                }
            })


            console.log("=====" + user)


            res.status(200).json(ResultSuccess(user))
        }
    })
}
