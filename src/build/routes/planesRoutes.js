"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planesController_1 = require("../controllers/planesController");
class PlanesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', planesController_1.planesController.list);
        this.router.get('/:id', planesController_1.planesController.listOne);
        this.router.post('/create', planesController_1.planesController.create);
        this.router.put('/actualizar/:idPlan', planesController_1.planesController.actualizar);
        this.router.delete('/eliminar/:idPlan', planesController_1.planesController.eliminar);
    }
}
const planesRoutes = new PlanesRoutes();
exports.default = planesRoutes.router;
