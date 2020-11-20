var PurchaseValidator = require('../service/purchase_validator.js');
var router = require('express').Router();

router.post('verifyPurchase', function (req, res) {
    PurchaseValidator.validatePurchase(req.body.user_id, req.body.purchase);
});

module.exports = router;
