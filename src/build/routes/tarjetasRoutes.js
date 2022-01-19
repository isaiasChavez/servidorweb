"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjetaController_1 = require("../controllers/tarjetaController");
class TarjetasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', tarjetaController_1.tarjetaController.create);
        this.router.put('/actualizar/:numTarjeta', tarjetaController_1.tarjetaController.actualizar);
        this.router.delete('/eliminar/:numTarjeta', tarjetaController_1.tarjetaController.eliminar);
        this.router.get('/', tarjetaController_1.tarjetaController.list);
        this.router.get('/:id', tarjetaController_1.tarjetaController.listOne);
    }
}
const tarjetasRoutes = new TarjetasRoutes();
exports.default = tarjetasRoutes.router;
