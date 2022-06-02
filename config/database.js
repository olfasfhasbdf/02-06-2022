const mongoose = require('mongoose')

const conn = async() => {
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://useradm:kanai2005@fiaptecnico.qpr8r.mongodb.net/test')
}

module.exports = conn