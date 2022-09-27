interface PersonInterface{
    first:string;
    last:string;
    getFullName(): string;
}

class PersonImplement implements PersonInterface{
    first: string;
    last: string;

    getFullName():string{
        return this.first + " " + this.last;
    }
}

let P1 = new PersonImplement();
P1.first = "SAHANA";
P1.last = "GP";
console.log(P1.getFullName());