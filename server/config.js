const express = require('express');
//const { createServer } = require('http');
//const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        // create back express
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            cars: '/api/cars',
            owners: '/api/owner',
            transactions: '/api/transactions'
        }

        //Database
        //this.connectDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

    }

    /* async connectDB() {
        await dbConnection();
    } */

    middlewares() {
        this.app.use(express.json({ limit: '50mb' }));
        //public dir
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.cars, require('../routes/cars.routes'));
        this.app.use(this.paths.owners, require('../routes/owner.routes'));
        this.app.use(this.paths.transactions, require('../routes/transactions.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }
}

module.exports = Server;