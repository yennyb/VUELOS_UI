import { Router } from 'express';

import pasajerosController from '../controllers/pasajerosController';

class PasajerosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }
    config(): void {
        this.router.get('/',pasajerosController.list);
        this.router.get('/:id',pasajerosController.getOne);
        this.router.post('/',pasajerosController.create);
        this.router.delete('/:id',pasajerosController.delete);
        this.router.put('/:id',pasajerosController.update);


    }

}

const pasajerosRoutes = new PasajerosRoutes();
export default pasajerosRoutes.router;

