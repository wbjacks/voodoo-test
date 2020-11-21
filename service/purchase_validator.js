var UserProvider = require('../model/user_provider.js');
var PurchaseTransactor = require('./purchase_transactor.js');

const request = require('request')

module.exports.validatePurchase = function(user_id, purchase) {
    var user = UserProvider.getUserForID(user_id);

    if (purchase.type == 'ios') {
        if (!isAppleReceiptValid(purchase)) {
            user.invalid_purchases.push(purchase);
            var e = new Error('IOS reciept is invalid');
            e.status = 400;
            throw e;
        }
    } else if (purchase.type == 'android') {
        if (!isGoogleReceiptValid(purchase)) {
            user.invalid_purchases.push(purchase);
            var e = new Error('Google receipt is invalid');
            e.status = 400;
            throw e;
        }
    } else {
        var e = new Error(`Receipt type ${purchase.type} is not supported.`);
        e.status = 400;
        throw e;
    }

    PurchaseTransactor.transact(user, purchase);

    return user;
}

function isAppleReceiptValid(purchase) {
    return true; // Normally, this would make a call to Apple's IAP backend
}

function isGoogleReceiptValid(purchase) {
    return true; // Normally, this would make a call to Google's IAP backend
}
