
// export type Result<T> = {
//     code: number,
//     msg: string,
//     data: T
// }


export enum Status {
    Success = 0,
    NotFound = 404,
    Error = 500,
    Validate = 1000
}

export interface Result<T> {
    code: number
    msg: string
    data?: T
}

export function ResultSuccess<T>(data: T): Result<T> {
    return { code: Status.Success, msg: 'Success', data: data }
}




export function ResultFailure(code: number, msg: string): Result<null> {
    return { code, msg, data: null }
}

