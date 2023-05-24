import {IsDate, IsEmail, IsInt, IsString, IsUrl, MaxLength, MinLength} from "class-validator";
import 'reflect-metadata';


export class Label {
    @IsInt()
    id: number;

    @IsString()
    name:string;

    @IsUrl()
    url:string;

    @IsUrl()
    icon:string;

    @IsDate()
    createdAt:string
}