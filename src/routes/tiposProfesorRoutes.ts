import { Router } from 'express';
import {tipoProfesorController} from '../controllers/tipoProfesorController';
class TiposProfesorRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.post('/create', tipoProfesorController.create);
	this.router.put('/actualizar/:idTipoProfesor',tipoProfesorController.actualizar);
	this.router.delete('/eliminar/:idTipoProfesor',tipoProfesorController.eliminar);
	this.router.get('/', tipoProfesorController.list );
	this.router.get('/:id', tipoProfesorController.listOne );
}
}
const tiposProfesorRoutes= new TiposProfesorRoutes();
export default tiposProfesorRoutes.router;