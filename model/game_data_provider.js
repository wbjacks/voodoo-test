class GameDataProvider {
    get() {
        return {
            "products": {
                "1": {
                    "type": "purchase_currency",
                    "currency": "energy",
                    "amount": 5
                },
                "2": {
                    "type": "purchase_currency",
                    "currency": "energy",
                    "amount": 10
                },
                "3": {
                    "type": "purchase_currency",
                    "currency": "energy",
                    "amount": 15
                },
                "4": {
                    "type": "purchase_currency",
                    "currency": "key",
                    "amount": 5
                },
                "5": {
                    "type": "purchase_currency",
                    "currency": "key",
                    "amount": 10
                },
                "6": {
                    "type": "purchase_currency",
                    "currency": "key",
                    "amount": 15
                },
            }
        };
    }
}

module.exports = GameDataProvider;
