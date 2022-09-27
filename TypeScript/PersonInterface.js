var PersonImplement = /** @class */ (function () {
    function PersonImplement() {
    }
    PersonImplement.prototype.getFullName = function () {
        return this.first + " " + this.last;
    };
    return PersonImplement;
}());
var P1 = new PersonImplement();
P1.first = "SAHANA";
P1.last = "GP";
console.log(P1.getFullName());
