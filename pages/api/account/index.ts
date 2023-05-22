// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from "@/server/db/client"


type User={
    name:string
}

type Result<T> = {
    code: number,
    msg: string,
    data: T
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result<User>>
) {
    if (req.method !== "Post") {
        res.status(405).send({code: 405, msg: 'Only POST requests allowed', data: null})
        return
    }
    res.status(200).json({code: 0, msg: 'Only POST requests allowed', data: {name:"li"}})
}
