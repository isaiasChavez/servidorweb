"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rentasController_1 = require("../controllers/rentasController");
class RentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //	this.router.post('/create', institutosController.create);
        //	this.router.put('/actualizar/:codigo',institutosController.actualizar);
        //	this.router.delete('/eliminar/:codigo',institutosController.eliminar);
        //	this.router.get('/', institutosController.list );
        //	this.router.get('/:id', institutosController.listOne );
        this.router.post('/create', rentasController_1.rentasController.create);
        this.router.put('/actualizar/:codigo', rentasController_1.rentasController.actualizar);
        this.router.delete('/eliminar/:codigo', rentasController_1.rentasController.eliminar);
        this.router.get('/', rentasController_1.rentasController.list);
        this.router.get('/:id', rentasController_1.rentasController.listOne);
    }
}
const rentasRoutes = new RentasRoutes();
exports.default = rentasRoutes.router;
