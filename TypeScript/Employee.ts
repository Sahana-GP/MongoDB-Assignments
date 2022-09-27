import {Dept} from "./Dept"

class  Employee extends Dept{
    id: number = 1;
    name: string = "Sahana";
    sal: number = 30000;

    display(){
        super.display();
        console.log(this.id);
        console.log(this.name);
        console.log(this.sal);
    }
}
let e1 = new Employee();
e1.display();