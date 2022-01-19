"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoProfesorController_1 = require("../controllers/tipoProfesorController");
class TiposProfesorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', tipoProfesorController_1.tipoProfesorController.create);
        this.router.put('/actualizar/:idTipoProfesor', tipoProfesorController_1.tipoProfesorController.actualizar);
        this.router.delete('/eliminar/:idTipoProfesor', tipoProfesorController_1.tipoProfesorController.eliminar);
        this.router.get('/', tipoProfesorController_1.tipoProfesorController.list);
        this.router.get('/:id', tipoProfesorController_1.tipoProfesorController.listOne);
    }
}
const tiposProfesorRoutes = new TiposProfesorRoutes();
exports.default = tiposProfesorRoutes.router;
