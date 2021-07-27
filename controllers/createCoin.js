const Coin = require('../model/createCoin').Coin;


exports.createCoin = (req, res, next)=>{

    
    const symbol = req.body.symbol;
    const threshold = req.body.threshold
    const poly = new Coin(symbol, threshold);
    poly.startPorcess();
    poly.save()
    .then((response)=>{
        res.status(200).json({
            message: 'coin created',
            coin: poly,

        })
    })
}
