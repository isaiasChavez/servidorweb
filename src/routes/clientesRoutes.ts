import { Router } from 'express';
import {clienteController} from '../controllers/clienteController';
class ClientesRoutes
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

	this.router.post('/create', clienteController.create);
	this.router.put('/actualizar/:codigo',clienteController.actualizar);
	this.router.delete('/eliminar/:codigo',clienteController.eliminar);
	this.router.get('/', clienteController.list );
	this.router.get('/:id', clienteController.listOne );

}
}
const clientesRoutes= new ClientesRoutes();
export default clientesRoutes.router;