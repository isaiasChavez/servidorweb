import { Router } from 'express';
import { tarjetaController } from '../controllers/tarjetaController';
class TarjetasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.post('/create', tarjetaController.create);
	this.router.put('/actualizar/:numTarjeta',tarjetaController.actualizar);
	this.router.delete('/eliminar/:numTarjeta',tarjetaController.eliminar);
	this.router.get('/', tarjetaController.list );
	this.router.get('/:id', tarjetaController.listOne );
}
}
const tarjetasRoutes= new TarjetasRoutes();
export default tarjetasRoutes.router;