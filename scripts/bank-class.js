class BankAccount {
    static totalMoney = 0

    constructor(accountType, balance, overdraftFee) {
        this.accountType = accountType
        this.balance = 0
        this.overdraftFee = 0
    }

    deposit(amount) {
        let newAmount = this.balance + amount
        this.balance += newAmount
        
    }

    withdraw(amount) {
        this.balance -= amount
        if(this.balance < 0) {
            this.overdraftFee += 20
        }
    }
}

// let gabesChecking = new BankAccount('checking')
// console.log(gabesChecking)
// gabesChecking.deposit(20)
// console.log(gabesChecking)
// gabesChecking.withdraw(30)
// console.log(gabesChecking)

class ChildBankAccount extends BankAccount {
    constructor(accountType, balance, overdraftFee) {
        super(accountType, balance, overdraftFee)
    }

    withdraw(amount) {
        if (this.balance - amount < 0) {
            this.overdraftFee = 0
            console.log(`Hey kid, ya too broke!`)
        }
    }
}

let kiddieAccount = new ChildBankAccount('checking')
console.log(kiddieAccount)
kiddieAccount.deposit(20)
console.log(kiddieAccount)
kiddieAccount.withdraw(30)