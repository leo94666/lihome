import {MaxLength, MinLength} from "class-validator";
import 'reflect-metadata';


export class User {
    @MinLength(6)
    @MaxLength(20)
    account: string;

    @MinLength(6)
    @MaxLength(20)
    password:string;
}