const mongodb = require('mongodb');

const getDb = require('../util/database').getDb;
const enterCoin = require('./enterCoin');

const exitEnter = (_id) => {

    const db = getDb();
    return db.collection('enterCoins').find({ _id: new mongodb.ObjectID(_id) }).next()
        .then(response => {
            const index = response.intIndex;
         
            enterCoin.removeInterval(index);
            deleteCurrentCoin(_id);
            return response;
        })
        .catch(err => {
            
        })
}

const deleteCurrentCoin = (coin_id) => {
    const db = getDb();
    return db.collection('currentEnterCoins').deleteOne({
        coin_id : new mongodb.ObjectID(coin_id)
    })
    .then((result)=>{
    })
}

module.exports = {
    exitEnter: exitEnter,
    deleteCurrentCoin : deleteCurrentCoin
}