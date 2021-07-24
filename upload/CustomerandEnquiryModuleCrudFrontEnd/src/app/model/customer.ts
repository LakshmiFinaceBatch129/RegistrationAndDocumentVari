import { BankDetails } from "./bank-details";
import { ElectronicsProduct } from "./electronics-product";
import { GuaranterDetails } from "./guaranter-details";
import { PreviousLoanDetails } from "./previous-loan-details";
import { User } from "./user";

export class Customer {
    id:number;
    customerLoanAmount:number;
    customerLoanType:string;
    tenure:number;
    customerAge:number;
    customerPancardNo:string;
    customerAdhardNo:string;
    verifybyoe:boolean;
    user:User;
	electronicProduct:ElectronicsProduct[];
	bank:BankDetails[];
	guaranter:GuaranterDetails[];
	loandetails:PreviousLoanDetails[];
    

}
