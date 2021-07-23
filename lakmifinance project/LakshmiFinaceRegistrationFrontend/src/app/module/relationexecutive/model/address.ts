import { Country } from './country';
import { city } from './city';
export class Address{
    
    addressId:number;
    loaclHouseNo:string;
    localArea:string;
    localLandmark:string;
    localCity:city;
    permanantHouseNo:string;
    permanantArea:string;
    permanantLandmark:string;
    permanantcity:city;
    country:Country;
}