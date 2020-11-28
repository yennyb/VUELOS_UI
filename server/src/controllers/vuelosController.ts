import { Request, Response } from 'express';


import pool from '../database'

class VuelosController {


     public async list (req: Request, res: Response) {
         (await pool).query('DESCRIBE vuelos');
         res.json('{text: lista de vuelos}');
      

    }
}
const vuelosController = new VuelosController();
export default vuelosController;
