class BankAccount {
    #balance; // private property

    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }
    // public method - visibale to users
    deposit(amount) {
        if (amount > 0){
            this.#balance += amount;
            console.log(`Deposited ₹${amount}`);
        }else {
            console.log("Invalid deposite amount");
        }
    }

    // public method - visible to users
    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
            console.log(`withdraw ₹${amount}`);
        }else {
            console.log("Insufficient balance")
        }
    }

    // public method to show limited detail
    checkBalance(){
        console.log(`current Balance: ₹${this.#balance}`);
    }

}  
//create an account
const account = new BankAccount("varun");

// Interact using abstraction methode
account.deposit(1000);
account.withdraw(400);
account.checkBalance();

