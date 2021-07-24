import { BankDetails } from "./bank-details";

export class PreviousLoanDetails {
    id:number;
	previousLoanamount:number;
	previousLoanStatus:string;
	tenure:number;
	paidAmount:number;
	reaminingAmount:number;
	bank:BankDetails[];
}
