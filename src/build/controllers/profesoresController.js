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
exports.profesoresController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class ProfesoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM profesores order by idProfesor');
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let consulta = 'SELECT * FROM profesores WHERE idProfesor = ' + id;
            const respuesta = yield database_1.default.query(consulta);
            console.log(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'profesor  no encontrado' });
        });
    }
    existe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password } = req.params;
            let consulta = "SELECT password FROM profesores WHERE correoProfesor ='" + correo + "'";
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                bcryptjs_1.default.compare(password, respuesta[0].password, function (err, resEncriptar) {
                    res.json(resEncriptar);
                    return;
                });
            }
            else
                res.json(false);
        });
    }
    /*
    public async create(req:Request,res:Response): Promise <void>
    {	//const {create} = req.params;
        const resp=await pool.query('INSERT INTO profesores set ?',[req.body]);
        res.json(resp);
    }
    */
    //public async eliminar(req:Request,res:Response): Promise <void>
    //{	
    //const {idInstituto} = req.params;
    //console.log(idInstituto);
    //	const resp=await pool.query('DELETE FROM institutos  set ?',[req.body]);
    //	res.json(resp);
    //}
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProfesor } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE profesores set ? WHERE idProfesor = ?", [req.body, idProfesor]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProfesor } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM profesores WHERE idProfesor= ${idProfesor}`);
            res.json(resp);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let password = req.body.password;
            var salt = bcryptjs_1.default.genSaltSync(10);
            bcryptjs_1.default.compare('prueba', "xyz", (err, res) => {
                console.log('Compared result', res);
            });
            bcryptjs_1.default.hash(password, salt).then(function (nuevoPassword) {
                req.body.password = nuevoPassword;
                const resp = database_1.default.query("INSERT INTO profesores set ?", [req.body]);
                res.json(resp);
            });
        });
    }
    getNombresIdByCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCarrera } = req.params;
            const resp = yield database_1.default.query(`SELECT idProfesor,nombres,apellidoPaterno,apellidoMaterno FROM profesores INNER JOIN carreras ON profesores.idCarrera = carreras.idCarrera= ${idCarrera}`);
            res.json(resp);
        });
    }
}
exports.profesoresController = new ProfesoresController();
