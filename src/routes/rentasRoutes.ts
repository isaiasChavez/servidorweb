import { Router } from 'express';
import {rentasController} from '../controllers/rentasController';
class RentasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
//	this.router.post('/create', institutosController.create);
//	this.router.put('/actualizar/:codigo',institutosController.actualizar);
//	this.router.delete('/eliminar/:codigo',institutosController.eliminar);
//	this.router.get('/', institutosController.list );
//	this.router.get('/:id', institutosController.listOne );

	this.router.post('/create', rentasController.create);
	this.router.put('/actualizar/:codigo',rentasController.actualizar);
	this.router.delete('/eliminar/:codigo',rentasController.eliminar);
	this.router.get('/', rentasController.list );
	this.router.get('/:id', rentasController.listOne );

}
}
const rentasRoutes= new RentasRoutes();
export default rentasRoutes.router;