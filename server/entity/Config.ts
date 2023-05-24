import {IsDate, IsEmail, IsInt, IsString, IsUrl, MaxLength, MinLength} from "class-validator";
import 'reflect-metadata';
import {Category} from "@/server/entity/Category";


export class Config {
    @IsInt()
    id: number;

    @IsDate()
    createdAt:Date

    category:Category[]
}