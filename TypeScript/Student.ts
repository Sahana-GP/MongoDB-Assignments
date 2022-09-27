import {Address} from "./Address"

class  Student extends Address{
    stuId: number = 1;
    stuName: string = "Sahana";
    stuStd: number = 3;

    display(){
        super.display();
        console.log(this.stuId);
        console.log(this.stuName);
        console.log(this.stuStd);
    }
}
let s1 = new Student();
s1.display();