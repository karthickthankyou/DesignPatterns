var Logger = require('./Logger');

var logger = new Logger().getInstance();

class Customer {

    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`New Customer: ${name} has ${money} in their account.`);
    }

}

module.exports = Customer;
