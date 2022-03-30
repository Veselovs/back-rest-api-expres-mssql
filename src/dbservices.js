let  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getAll() {
    try {
        let  pool = await  sql.connect(config);
        let  rows = await  pool.request().query("SELECT * from AAA");
        return  rows.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async  function  getOne(id) {
    try {
        let  pool = await  sql.connect(config);
        let  row = await  pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * from AAA where ID = @input_parameter");
        return  row.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    getAll:  getAll,
    getOne: getOne
}
