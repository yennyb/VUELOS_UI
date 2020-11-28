import { Request, Response } from 'express';

import pool from '../database'

class PasajerosController {


     public async list (req: Request, res: Response) {
        const pasajeros = (await pool).query('select * from pasajeros');
         res.json('{text: pasajeros}');

     }

     public async getOne(req: Request, res: Response):Promise<any>{
          const {documento} = req.params;
          const pasajeros = await (await pool).query('select * from where documento=?',[documento]);
          console.log(pasajeros);
          if (pasajeros.length > 0){
               return res.json (pasajeros[0]);


          }
          res.status(404).json ({text: "pasajero no existe"});
     }

     public async create (req: Request, res: Response):Promise<void> {
        (await pool).query ('insert into pasajeros ?',[req.body]);
          res.json ({message:'pasajero guardado'});

     }    

     public async update (req: Request, res: Response):Promise<void>{
          const { id } = req.params;
          (await pool).query ('Update from pasajeros id= ?',[req.body,id]);
          res.json ({text:'Actualizando un pasajero'+ req.params.id });


     }
     public async delete (req: Request, res: Response): Promise<void>{
          const { id } = req.params;
          const pasajeros = await (await pool).query('select * from where documento=?',[id]);
          
          res.json({ message: 'pasajero eliminado'});



     }


    }

const pasajerosController = new PasajerosController();
export default pasajerosController;
