import { Request, Response } from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
class ProfesoresController {
	public async list(req: Request, res: Response): Promise<void> {
		const respuesta = await pool.query('SELECT * FROM profesores order by idProfesor');
		console.log(respuesta);
		res.json(respuesta);
	}
	public async listOne(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		let consulta = 'SELECT * FROM profesores WHERE idProfesor = ' + id;
		const respuesta = await pool.query(consulta);
		console.log(consulta);
		if (respuesta.length > 0) {
			res.json(respuesta[0]);
			return;
		}
		res.status(404).json({ 'mensaje': 'profesor  no encontrado' });
	}
	public async existe(req: Request, res: Response): Promise<void> {
		const { correo, password } = req.params;
		let consulta = "SELECT password FROM profesores WHERE correoProfesor ='" + correo + "'";
		const respuesta = await pool.query(consulta);
		if (respuesta.length > 0) 
		{
			bcrypt.compare(password, respuesta[0].password, function (err, resEncriptar) {
					res.json(resEncriptar);
					return;
				})
		}
		else
			res.json(false);
	}
	/*
	public async create(req:Request,res:Response): Promise <void>
	{	//const {create} = req.params;
		const resp=await pool.query('INSERT INTO profesores set ?',[req.body]);
		res.json(resp);
	}
	*/
	//public async eliminar(req:Request,res:Response): Promise <void>
	//{	
	//const {idInstituto} = req.params;
	//console.log(idInstituto);
	//	const resp=await pool.query('DELETE FROM institutos  set ?',[req.body]);
	//	res.json(resp);
	//}

	public async actualizar(req: Request, res: Response): Promise<void> {
		const { idProfesor } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE profesores set ? WHERE idProfesor = ?", [req.body, idProfesor]);
		res.json(resp);
	}
	public async eliminar(req: Request, res: Response): Promise<void> {
		const { idProfesor } = req.params;
		const resp = await pool.query(`DELETE FROM profesores WHERE idProfesor= ${idProfesor}`);
		res.json(resp);
	}

	public async create(req: Request, res: Response): Promise<void> {
		let password = req.body.password as any;
		var salt = bcrypt.genSaltSync(10);
		bcrypt.compare('prueba', "xyz", (err, res) => {
			console.log('Compared result', res);
		})
		bcrypt.hash(password, salt).then(function (nuevoPassword) {
			req.body.password = nuevoPassword;
			const resp = pool.query("INSERT INTO profesores set ?",

				[req.body]);

			res.json(resp);
		})
	}

	public async getNombresIdByCarrera(req: Request, res: Response): Promise<void> {
		const { idCarrera } = req.params;
		const resp = await pool.query(`SELECT idProfesor,nombres,apellidoPaterno,apellidoMaterno FROM profesores INNER JOIN carreras ON profesores.idCarrera = carreras.idCarrera= ${idCarrera}`);
		res.json(resp);
	}
}
export const profesoresController = new ProfesoresController();