const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    password: 'root@123',
    USER: 'root',
    database: 'project_one',
    host: 'localhost',
    port:'3306'
});

let prodb = {};

prodb.all= () => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM PRODUCT', (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        })
    });
}
module.exports = prodb;