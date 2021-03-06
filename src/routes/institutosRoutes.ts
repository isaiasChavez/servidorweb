import { Router } from 'express';
import {institutosController} from '../controllers/institutosController';
class InstitutosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.post('/create', institutosController.create);
	this.router.put('/actualizar/:codigo',institutosController.actualizar);
	this.router.delete('/eliminar/:codigo',institutosController.eliminar);
	this.router.get('/', institutosController.list );
	this.router.get('/:id', institutosController.listOne );
}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;