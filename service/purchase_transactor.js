var GameDataProvider = require('../model/game_data_provider.js');

module.exports.transact = function(user, purchase) {
    var gameData = GameDataProvider.get();

    var product = gameData.products[purchase.product_id];
    if (!product) {
        // NOTE: This is a pretty serious bug, as the player would have purchased something
        // that is not fulfillable. Probably it would need to raise an alert of some kind.
        // Alternatively, there's a player on a hacked client, and maybe we'd want to know about
        // that?
        var e = new Error(`Product ${purchase.product_id} is not defined!`);
        e.status = 400;
        throw e;
    }

    if (product.type === 'purchase_currency') {
        handlePurchaseCurrency(user, product);
    } 
    // Support other product types here!

    user.cleared_purchases.push(purchase);
}

function handlePurchaseCurrency(user, product) {
    if (product.currency == 'energy') {
        user.currencies.energy += product.amount;
    } else if (product.currency == 'key') {
        user.currencies.key += product.amount;
    } else {
        var e = new Error(`Currency ${product.currency} not supported`);
        e.status = 500; // This is a misconfiguration, IE a bug on our end.
        throw e;
    }
}
