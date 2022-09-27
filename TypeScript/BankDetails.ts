export class Bankdetails{
    accNumber: number;
    accName: String;
    accBalance: number;

    constructor(anumber:number, aname:String, b:number){
        this.accNumber = anumber;
        this.accName = aname;
        this.accBalance =b;
    }
display():void{
    console.log(this.accNumber);
    console.log(this.accName);
    console.log(this.accBalance);
}
}

let b1 = new Bankdetails(1,"Opti", 456);
b1.display();