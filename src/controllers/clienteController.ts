import {Request,Response} from 'express';
import pool from '../database';
class ClienteController
{
public async list(req: Request, res: Response ): Promise<void>
{
	const respuesta = await pool.query('SELECT * FROM Cliente order by telèfono');
	console.log(respuesta);
	res.json( respuesta );
}
public async listOne(req: Request, res: Response): Promise <void>{
	const {id} = req.params;
	let consulta='SELECT * FROM Cliente WHERE email_Cliente = '+id;
	const respuesta = await pool.query(consulta); 
	console.log(consulta);
	if(respuesta.length>0){
		res.json(respuesta[0]);
		return ;
	}
	res.status(404).json({'mensaje': 'Instituto  no encontrado'});
}
public async create(req:Request,res:Response): Promise <void>
{	//const {create} = req.params;
	const resp=await pool.query('INSERT INTO Cliente set ?',[req.body]);
	res.json(resp);
}


public async actualizar(req: Request, res: Response): Promise<void> {
const { codigo } = req.params;
console.log(req.params);
const resp = await pool.query("UPDATE Cliente set ? WHERE email_Cliente = ?", [req.body,codigo]);
res.json(resp);
}
public async eliminar(req: Request, res: Response): Promise<void> {
const { emailCliente } = req.params;
const resp = await pool.query(`DELETE FROM Cliente WHERE email_Cliente= ${emailCliente}`);
res.json(resp);
}
}
export const clienteController = new ClienteController();