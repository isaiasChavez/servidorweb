import {Request,Response} from 'express';
import pool from '../database';
class TarjetaController
{
public async list(req: Request, res: Response ): Promise<void>
{
	const respuesta = await pool.query('SELECT * FROM Tarjeta order by numTarjeta');
	console.log(respuesta);
	res.json( respuesta );
}
public async listOne(req: Request, res: Response): Promise <void>{
	const {id} = req.params;
	let consulta='SELECT * FROM Tarjeta WHERE numTarjeta = '+id;
	const respuesta = await pool.query(consulta); 
	console.log(consulta);
	if(respuesta.length>0){
		res.json(respuesta[0]);
		return ;
	}
	res.status(404).json({'mensaje': 'tarjeta  no encontrada'});
}

public async actualizar(req: Request, res: Response): Promise<void> {
const {numTarjeta} = req.params;
console.log(req.params);
const resp = await pool.query("UPDATE Tarjeta set ? WHERE numTarjeta = ?", [req.body, numTarjeta]);
res.json(resp);
}

public async eliminar(req: Request, res: Response): Promise<void> {
const {numTarjeta} = req.params;
const resp = await pool.query(`DELETE FROM Tarjeta WHERE numTarjeta= ${numTarjeta}`);
res.json(resp);
}
public async create(req:Request,res:Response): Promise <void>
{	const resp=await pool.query('INSERT INTO Tarjeta set ?',[req.body]);
	res.json(resp);
}

}
export const tarjetaController = new TarjetaController();