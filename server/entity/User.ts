import {IsEmail, MaxLength, MinLength} from "class-validator";
import 'reflect-metadata';
import {Config} from "@/server/entity/Config";


export class User {
    @IsEmail()
    email: string;
    @MinLength(6, {
        message: '密码长度最短不低于6位!',
    })
    password:string;

    config:Config
}