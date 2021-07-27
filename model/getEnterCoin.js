const mongodb = require('mongodb')

const getDb = require('../util/database').getDb;


const fetchEnterCoin = (_id)=>{
    const db = getDb();
    return db.collection('enterCoins').find({_id: new mongodb.ObjectID(_id)}).next()
        .then(response => {
          
            if(response == null){
            }
            return response
        })
        .catch(err => {
        }) 
}

module.exports = {

    fetchEnterCoin: fetchEnterCoin
}