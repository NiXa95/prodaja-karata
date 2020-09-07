const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "1234",
    user: "root",
    database: "prodaja_karata",
    host: "localhost",
    port: "3306"
})

let kartedb = {};

kartedb.all = () => {

    return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM customer`, (err, results) => {
        if(err){
            return reject(err);
        }
        return resolve(results);
    })
} 
    )}

module.exports = kartedb;