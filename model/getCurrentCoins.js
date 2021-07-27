const mongodb = require('mongodb')

const getDb = require('../util/database').getDb;


const fetchCurrentCoins = () => {
    const db = getDb();

    return db.collection('currentCoins').find().toArray()
        .then((result) => {
            return result;
        })
        .catch((err) => {
        })
}

module.exports = {

    fetchCurrentCoins: fetchCurrentCoins
}