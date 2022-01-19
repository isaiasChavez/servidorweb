"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarjetaController = void 0;
const database_1 = __importDefault(require("../database"));
class TarjetaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM Tarjeta order by numTarjeta');
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let consulta = 'SELECT * FROM Tarjeta WHERE numTarjeta = ' + id;
            const respuesta = yield database_1.default.query(consulta);
            console.log(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'tarjeta  no encontrada' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numTarjeta } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE Tarjeta set ? WHERE numTarjeta = ?", [req.body, numTarjeta]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numTarjeta } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM Tarjeta WHERE numTarjeta= ${numTarjeta}`);
            res.json(resp);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query('INSERT INTO Tarjeta set ?', [req.body]);
            res.json(resp);
        });
    }
}
exports.tarjetaController = new TarjetaController();
