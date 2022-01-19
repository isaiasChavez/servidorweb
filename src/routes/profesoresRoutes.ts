import { Router } from 'express';
import {profesoresController} from '../controllers/profesoresController';
class ProfesoresRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.post('/create', profesoresController.create);
	this.router.put('/actualizar/:idProfesor',profesoresController.actualizar);
	this.router.delete('/eliminar/:idProfesor',profesoresController.eliminar);
	this.router.get('/', profesoresController.list );
	this.router.get('/:id', profesoresController.listOne );
	this.router.get('/getNombresIdByCarrera/:idCarrera', profesoresController.getNombresIdByCarrera);
	this.router.get('/:correo/:password', profesoresController.existe );
}
}
const profesoresRoutes= new ProfesoresRoutes();
export default profesoresRoutes.router;