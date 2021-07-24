import { Address } from "./address";

export class User {
    id:number;
    username:string;
	password:string;
    role:string;
	firstname:string ; 
	lastname:string ; 
	email:string ;
	mobile:string;
    dob:string;
	gender:string;
    address:Address;
}
