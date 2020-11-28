import { application } from "express";
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pasajerosRoutes from './routes/pasajerosRoutes';
import vuelosRoutes from './routes/vuelosRoutes';

class server {

    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();


    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }

    routes(): void {
        this.app.use('/', pasajerosRoutes);
        this.app.use('/api/vuelos',vuelosRoutes);



    }

    start(): void{
        this.app.listen(this.app.get('port'),() => {
            console.log('server on port', this.app.get('port'));

        });
    }




}

const Server = new server();
Server.start();
