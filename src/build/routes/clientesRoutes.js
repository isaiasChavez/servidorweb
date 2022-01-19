"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = require("../controllers/clienteController");
class ClientesRoutes {
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
        this.router.post('/create', clienteController_1.clienteController.create);
        this.router.put('/actualizar/:codigo', clienteController_1.clienteController.actualizar);
        this.router.delete('/eliminar/:codigo', clienteController_1.clienteController.eliminar);
        this.router.get('/', clienteController_1.clienteController.list);
        this.router.get('/:id', clienteController_1.clienteController.listOne);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
