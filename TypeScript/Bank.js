"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(accNumber, accName, accBalance) {
        this.accNumber = accNumber;
        this.accName = accName;
        this.accBalance = accBalance;
    }
    Bank.prototype.deposit = function (amount) {
        return this.accBalance += amount;
    };
    Bank.prototype.withdraw = function (amount) {
        if (amount < this.accBalance) {
            return this.accBalance - amount;
        }
        else {
            throw new Error("The amount must be less or equal than the current balance.");
        }
    };
    return Bank;
}());
exports.Bank = Bank;
var b1 = new Bank(1, "Opti", 400);
//b1.display();
console.log("deposit", b1.deposit(400));
console.log("withdraw", b1.withdraw(200));
