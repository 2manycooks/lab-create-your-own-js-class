class BankAccount {
    static totalAmount = 0

    constructor(first, last, maturity, accountType, overdraftFee, balance) {
        this.first = first
        this.last = last
        this.maturity = maturity
        this.accountType = accountType
        this.overdraftFee = 0
        this.balance = 0
    }

    deposit(amount) {
        this.balance += amount
        BankAccount.totalAmount += amount
    }

    withdraw(amount) {
       if(this.maturity === 'Child') {
            if(amount > this.balance)
            console.log('hey kid! ya too broke!')
        } else {
            this.balance -= amount
            BankAccount.totalAmount -= amount
            if(amount > this.balance) {
                this.overdraftFee += 20
            }
        }
    }
}

let gabesChecking = new BankAccount('Gabe', 'Gangoso', '?', 'Checking')

gabesChecking.deposit(100)
console.log(gabesChecking.balance)
gabesChecking.withdraw(101)
console.log(gabesChecking.balance)
console.log(gabesChecking.overdraftFee)

let babyCash = new BankAccount('Baby', "cash", 'Child', 'Savings')
babyCash.deposit(5)
babyCash.withdraw(6)