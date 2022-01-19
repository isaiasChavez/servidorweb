import { Router } from 'express';
import { planesController } from '../controllers/planesController';
class PlanesRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', planesController.list );
        this.router.get('/:id', planesController.listOne );
        this.router.post('/create', planesController.create);
		this.router.put('/actualizar/:idPlan',planesController.actualizar);
		this.router.delete('/eliminar/:idPlan',planesController.eliminar);
    }
}
const planesRoutes= new PlanesRoutes();
export default planesRoutes.router;