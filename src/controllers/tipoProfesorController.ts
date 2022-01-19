import {Request,Response} from 'express';
import pool from '../database';
class TipoProfesorController
{
public async list(req: Request, res: Response ): Promise<void>
{
	const respuesta = await pool.query('SELECT * FROM tipoProfesor order by idTipoProfesor');
	console.log(respuesta);
	res.json( respuesta );
}
public async listOne(req: Request, res: Response): Promise <void>{
	const {id} = req.params;
	let consulta='SELECT * FROM tipoProfesor WHERE idTipoProfesor= '+id;
	const respuesta = await pool.query(consulta); 
	console.log(consulta);
	if(respuesta.length>0){
		res.json(respuesta[0]);
		return ;
	}
	res.status(404).json({'mensaje': 'profesor  no encontrado'});
}
public async create(req:Request,res:Response): Promise <void>
{	//const {create} = req.params;
	const resp=await pool.query('INSERT INTO tipoProfesor set ?',[req.body]);
	res.json(resp);
}

public async actualizar(req: Request, res: Response): Promise<void> {
const { idTipoProfesor } = req.params;
console.log(req.params);
const resp = await pool.query("UPDATE tipoProfesor set ? WHERE idTipoProfesor = ?", [req.body, idTipoProfesor]);
res.json(resp);
}
public async eliminar(req: Request, res: Response): Promise<void> {
const { idTipoProfesor} = req.params;
const resp = await pool.query(`DELETE FROM tipoProfesor WHERE idTipoProfesor= ${idTipoProfesor}`);
res.json(resp);
}

}
export const tipoProfesorController = new TipoProfesorController();