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
exports.clienteController = void 0;
const database_1 = __importDefault(require("../database"));
class ClienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM Cliente order by telèfono');
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let consulta = 'SELECT * FROM Cliente WHERE email_Cliente = ' + id;
            const respuesta = yield database_1.default.query(consulta);
            console.log(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Instituto  no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query('INSERT INTO Cliente set ?', [req.body]);
            res.json(resp);
        });
    }
    //public async eliminar(req:Request,res:Response): Promise <void>
    //{	
    //const {idInstituto} = req.params;
    //console.log(idInstituto);
    //	const resp=await pool.query('DELETE FROM institutos  set ?',[req.body]);
    //	res.json(resp);
    //}
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email_Cliente } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE Cliente set ? WHERE email_Cliente = ?", [req.body, email_Cliente]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email_Cliente } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM institutos WHERE email_Cliente= ${email_Cliente}`);
            res.json(resp);
        });
    }
}
exports.clienteController = new ClienteController();
