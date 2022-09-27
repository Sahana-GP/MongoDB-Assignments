export class Bank{
    accNumber: number;
    accName: String;
    accBalance: number;

    constructor(accNumber:number, accName:String, accBalance:number){
        this.accNumber = accNumber;
        this.accName = accName;
        this.accBalance =accBalance;
    }
   
    deposit(amount):number{
     return this.accBalance += amount;
    }


    withdraw(amount):number{
        if (amount < this.accBalance ){
            return this.accBalance - amount;
        }
        else {
            throw new Error("The amount must be less or equal than the current balance.")
        }
}
}
let b1 = new Bank(1,"Opti", 400);
//b1.display();
console.log("deposit", b1.deposit(400));
console.log("withdraw", b1.withdraw(200));