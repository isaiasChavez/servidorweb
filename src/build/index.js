"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const institutosRoutes_1 = __importDefault(require("./routes/institutosRoutes"));
const carrerasRoutes_1 = __importDefault(require("./routes/carrerasRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const profesoresRoutes_1 = __importDefault(require("./routes/profesoresRoutes"));
const tiposProfesorRoutes_1 = __importDefault(require("./routes/tiposProfesorRoutes"));
const tarjetasRoutes_1 = __importDefault(require("./routes/tarjetasRoutes"));
const materiasRoutes_1 = __importDefault(require("./routes/materiasRoutes"));
const periodosRoutes_1 = __importDefault(require("./routes/periodosRoutes"));
const planesRoutes_1 = __importDefault(require("./routes/planesRoutes"));
//import clientesRoutes from './routes/clientesRoutes';
//import rentasRoutes from './routes/rentasRoutes';
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/institutos', institutosRoutes_1.default);
        this.app.use('/api/carreras', carrerasRoutes_1.default);
        this.app.use('/api/profesores', profesoresRoutes_1.default);
        this.app.use('/api/tipoProfesor', tiposProfesorRoutes_1.default);
        this.app.use('/api/tarjetas', tarjetasRoutes_1.default);
        this.app.use('/api/materias', materiasRoutes_1.default);
        this.app.use('/api/periodos', periodosRoutes_1.default);
        this.app.use('/api/planes', planesRoutes_1.default);
        //this.app.use('/api/cliente',clientesRoutes);
        //this.app.use('/api/rentas',rentasRoutes);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
