// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from "@/server/db/client"
import {Result, ResultFailure, ResultSuccess, Status} from '@/server/result'

// @ts-ignore
import {_} from "lodash"

import {plainToInstance} from 'class-transformer';
import {User} from "@/server/entity/User";
import { validate } from 'class-validator';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result<User>>
) {
    const params = plainToInstance(User, req.body);
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


            res.status(200).json(ResultSuccess(user))
        }
    })
}
