"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.get('/instituto/', (req, res) => res.send('probando instituto'));
        this.router.get('/carreras/', (req, res) => res.send('probando carreras'));
        this.router.get('/profesores/', (req, res) => res.send('probando carreras'));
        this.router.get('/tipoProfesor/', (req, res) => res.send('probando carreras'));
        this.router.get('/tarjeta/', (req, res) => res.send('probando tarjeta'));
        //this.router.get('/:id/',(req,res) => res.send('probando clientes'));
        //this.router.get('/id/',(req,res) => res.send('probando rentas'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
