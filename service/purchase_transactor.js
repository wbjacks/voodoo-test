var GameDataProvider = require('../model/game_data_provider.js');

class PurchaseTransactor {
    transact(user, purchase) {
        var gameData = GameDataProvider.get();

        var product = gameData.products[purchase.product_id];
        if (!product) {
            // NOTE: This is a pretty serious bug, as the player would have purchased something
            // that is not fulfillable. Probably it would need to raise an alert of some kind.
            throw `Product ${purchase.product_id} is not defined!`
        }

        if (product.type === 'purchase_currency') {
            _handlePurchaseCurrency(user, product);
        } 
        // Support other product types here!

        user.cleared_purchases.push(purchase);
    }

    _handlePurchaseCurrency(user, product) {
        if (product.currency == 'energy') {
            user.currencies.energy += product.amount;
        } else if (product.currency == 'key') {
            user.currencies.key += product.amount;
        } else {
            throw `Currency ${product.currency} not supported`
        }
    }
}

module.exports = PurchaseTransactor;
