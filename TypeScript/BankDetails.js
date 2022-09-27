"use strict";
exports.__esModule = true;
exports.Bankdetails = void 0;
var Bankdetails = /** @class */ (function () {
    function Bankdetails(anumber, aname, b) {
        this.accNumber = anumber;
        this.accName = aname;
        this.accBalance = b;
    }
    Bankdetails.prototype.display = function () {
        console.log(this.accNumber);
        console.log(this.accName);
        console.log(this.accBalance);
    };
    return Bankdetails;
}());
exports.Bankdetails = Bankdetails;
var b1 = new Bankdetails(1, "Opti", 456);
b1.display();
