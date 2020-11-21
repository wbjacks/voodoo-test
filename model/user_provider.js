
const reallyComplicatedDatabase = {
    "1234abc": { 
        "playerLevel": 1,
        "selectedHero": "7057ef0d-716d-4c0b-a09c-0ee1286d908f",
        "talentUpgradeCount": 1,
        "lastChapterSelected": "",
        "lastChapterIndex": 2,
        "lastDifficultyIndex": 0,
        "lastEnergyTimestamp": "09/18/2020 13:38:30",
        "lastCommonChestTimeStamp": "09/18/2020 13:30:30",
        "lastRareChestTimeStamp": "09/18/2020 13:30:30",
        "playCount": 3,
        "sessionCount": 1,
        "lastEndlessFloorCompleted": 0,
        "currencies": {
            "energy": 37,
            "key": 5
        },
        "talents": [
            {
                "talentId": "extra_bullet",
                "level": 1
            }
        ],
        "heroes": [
            {
                "id": "7057ef0d-716d-4c0b-a09c-0ee1286d908f",
                "heroId": "default",
                "level": 4
            }
        ],
        "invalid_purchases": [],
        "cleared_purchases": []
    }
}

module.exports.getUserForID = function(id) {
    var user = reallyComplicatedDatabase[id];
    if (user) return user;

    var e = new Error( `User not found for id ${id}`);
    e.status = 400;
    throw e;
}
