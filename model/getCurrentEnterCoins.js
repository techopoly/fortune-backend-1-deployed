const mongodb = require('mongodb')

const getDb = require('../util/database').getDb;


const fetchCurrentEnterCoins = () => {
    const db = getDb();

    return db.collection('currentEnterCoins').find().toArray()
        .then((result) => {
            return result;
        })
        .catch((err) => {
        })
}

module.exports = {

    fetchCurrentEnterCoins: fetchCurrentEnterCoins
}