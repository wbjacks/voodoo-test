var UserProvider = require('../model/user_provider.js');
var PurchaseTransactor = require('./purchase_transactor.js');

const request = require('request')

class PurchaseValidator {
    validatePurchase(user_id, purchase) {
        var user = UserProvider.getUserForId(user_id);

        if (purchase.type == 'ios' && !isAppleReceiptValid(purchase)) {
            user.invalid_purchases.push(purchase);
            throw `IOS reciept is invalid`
        } else if (purchase.type == 'android' && !isGoogleReceiptValid(purchase)) {
            user.invalid_purchases.push(purchase);
            throw `Google receipt is invalid`
        } 

        PurchaseTransactor.transact(user, purchase);
    }

    isAppleReceiptValid(purchase) {
        return true; // Normally, this would make a call to Apple's IAP backend
    }

    isGoogleReceiptValid(purchase) {
        return true; // Normally, this would make a call to Google's IAP backend
    }
};

module.exports = PurchaseValidator;
