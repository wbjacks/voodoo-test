let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let expect = chai.expect;


chai.use(chaiHttp);


describe('/purchase', function() {
    describe('/verifyPurchase', function() {
        it('makes a valid purchase', function() {
            chai.request(server)
                .post('/purchase/verifyPurchase')
                .send({
                    'user_id': '1234abc',
                    'purchase': {
                        'type': 'android',
                        'product_id': 2
                    }
                })
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.invalid_purchases.length).to.eq(0);
                    expect(res.body.cleared_purchases.length).to.eq(1);
                });
        });

        describe('when an invalid request is sent', function() {
            describe('with a bad user id', function() {
                it('fails with 400 error', function() {
                    chai.request(server)
                        .post('/purchase/verifyPurchase')
                        .send({
                            'user_id': 'badid',
                            'purchase': {
                                'type': 'android',
                                'product_id': 2
                            }
                        })
                        .end(function(err, res) {
                            expect(res).to.have.status(400);
                        });
                });
            });

            describe('with a bad purchase type', function() {
                it('fails with 400 error', function() {
                    chai.request(server)
                        .post('/purchase/verifyPurchase')
                        .send({
                            'user_id': '1234abc',
                            'purchase': {
                                'type': 'not a type!!',
                                'product_id': 2
                            }
                        })
                        .end(function(err, res) {
                            expect(res).to.have.status(400);
                        });
                });
            });

            describe('with a bad product id', function() {
                it('fails with 400 error', function() {
                    chai.request(server)
                        .post('/purchase/verifyPurchase')
                        .send({
                            'user_id': '1234abc',
                            'purchase': {
                                'type': 'android',
                                'product_id': 'not an id!!'
                            }
                        })
                        .end(function(err, res) {
                            expect(res).to.have.status(400);
                        });
                });
            });
        });
    });
});
