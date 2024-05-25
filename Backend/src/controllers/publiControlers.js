const publiModel = require('../models/publiModel')

const getAll = async(req, res)=>{
    const publi = await publiModel.getAll();
    return res.status(200).send(publi);
};

module.exports ={
    getAll
}