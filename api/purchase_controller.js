var PurchaseValidator = require('../service/purchase_validator.js');
var router = require('express').Router();

router.post('/verifyPurchase', function (req, res) {
    var updatedUser = PurchaseValidator.validatePurchase(req.body.user_id, req.body.purchase);
    res.json(updatedUser);
});

module.exports = router;
