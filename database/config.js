const mysql = require('mysql2');
const dbConnection = async () => {

    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'pickit'
          });
          
          connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });

    } catch (error) {
        console.log(error);
        throw new Error('Error start DB');
    }
}
module.exports = {
    dbConnection
}




