import { Router } from 'express';

import vuelosController from '../controllers/vuelosController';

class VuelosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }
    config(): void {
        this.router.get('/',vuelosController.index);


    }

}

const vuelosRoutes = new VuelosRoutes();
export default vuelosRoutes.router;

