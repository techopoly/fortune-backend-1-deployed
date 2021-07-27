const exitEnterModel = require('../model/exitEnter');



const exitEnter = (req, res, next) => {

    const _id = req.query._id;
    exitEnterModel.exitEnter(_id)
        .then((result) => {
            res.status(200).json({
                message: 'exited',
                coin: result
            })
        })
        .catch((err) => {
        })
}


module.exports = exitEnter;
