var logger = require('./Logger');
var Customer = require('./Customer');
var Shop = require('./Shop');


logger.log('starting app...');

var alex = new Customer('alex', 500)
var ski_shop = new Shop('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
