export class Address{
    streetName: string = "R R Nagar";
    city: string = "Bangalore"
    state: string = "Karnataka"
    display(){
        console.log(this.streetName);
        console.log(this.city);
        console.log(this.state);
    }
}