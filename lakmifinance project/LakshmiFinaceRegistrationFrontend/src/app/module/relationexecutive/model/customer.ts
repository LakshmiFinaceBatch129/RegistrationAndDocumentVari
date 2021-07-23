import { PrevieousLoan } from './previeousloan';
import { Guaranter } from './guaranter';
import { Bank } from './bank';
import { VehicleDetails } from './vehicaldetails';
import { Address } from './address';
export class Customer {

    customerId:number;
    customerName:string;
    customerMobileNo:string;
    customerLoanAmount:number;
    customerAge : string;
    customerdDateOfBirth: string;
    customerEmail: string;
    customerPancardNo:string;
    address:Address;
    vehical:VehicleDetails;
    bank:Bank;
    guaranter:Guaranter;
    loandetails:PrevieousLoan;

}