var Logger = require('./Logger');

var logger = new Logger().getInstance();

class Shop {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Shop: ${name} has ${inventory.length} items in stock.`);
    }

}

module.exports = Shop;
