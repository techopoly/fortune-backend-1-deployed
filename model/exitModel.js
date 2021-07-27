const mongodb = require('mongodb');

const getDb = require('../util/database').getDb;
//const getCurrentPrice = require('../model/createCoin').getCurrentPrice;

const createCoin = require('./createCoin');


const exit = (_id) => {
    let netProfit = 0;

   
    // console.log('createCoin: ',createCoin);
    // console.log('getTest(): ',createCoin.getTest())
    const db = getDb();
    return db.collection('coins').find({ _id: new mongodb.ObjectID(_id) }).next()
        .then(response => { 
                  
                const index = response.intIndex;
                createCoin.removeInterval(index);
                let startPrice = response.startPrice;
                let currentPrice = createCoin.getCurrentPrice();
                netProfit = ((currentPrice - startPrice) * 100) / startPrice
                deleteCurrentCoin(_id);
                const  result = {
                    coin: response,
                    netProfit: netProfit,
                   currentPrice: currentPrice
                }
                return result    

        })
        .catch(err => {
        })
}

const deleteCurrentCoin = (coin_id) => {
    const db = getDb();
    return db.collection('currentCoins').deleteOne({
        coin_id : new mongodb.ObjectID(coin_id)
    })
    .then((result)=>{
    })
}

module.exports = {
    exit: exit,
    deleteCurrentCoin : deleteCurrentCoin
}