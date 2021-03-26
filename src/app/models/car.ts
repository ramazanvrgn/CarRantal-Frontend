import { CarImage } from "./carImage";

export interface Car{
    id:number;
    brandName:string;
    colorName:string;
    modelYear:string;
    dailyPrice:number;
    description:string;
    imagePaths:CarImage[];
}