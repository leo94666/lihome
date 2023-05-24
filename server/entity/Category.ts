import {IsDate, IsEmail, IsInt, IsString, IsUrl, MaxLength, MinLength} from "class-validator";
import 'reflect-metadata';
import {Label} from "@/server/entity/Label";


export class Category {
    @IsInt()
    id: number;

    @IsString()
    name:string;

    @IsUrl()
    url:string;

    @IsUrl()
    icon:string;

    @IsDate()
    createdAt:Date

    labels:Label[]
}