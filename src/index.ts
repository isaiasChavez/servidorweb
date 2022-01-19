import indexRoutes from './routes/indexRoutes';
import institutosRoutes from './routes/institutosRoutes';
import carrerasRoutes from './routes/carrerasRoutes';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import profesoresRoutes from './routes/profesoresRoutes'
import tiposProfesorRoutes from './routes/tiposProfesorRoutes';
import tarjetasRoutes from './routes/tarjetasRoutes';
import materiasRoutes from './routes/materiasRoutes';
import periodosRoutes from './routes/periodosRoutes';
import planesRoutes from './routes/planesRoutes';
//import clientesRoutes from './routes/clientesRoutes';
//import rentasRoutes from './routes/rentasRoutes';
import morgan from 'morgan';
import cors from 'cors';
import express, {Application} from 'express';
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}
config (): void
{
this.app.set('port',process.env.PORT|| 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
}
routes (): void
{
	this.app.use(indexRoutes);
	this.app.use('/api/institutos',institutosRoutes);
	this.app.use('/api/carreras',carrerasRoutes);
	this.app.use('/api/profesores',profesoresRoutes);
	this.app.use('/api/tipoProfesor',tiposProfesorRoutes);
	this.app.use('/api/tarjetas',tarjetasRoutes);
	this.app.use('/api/materias',materiasRoutes);
	this.app.use('/api/periodos',periodosRoutes);
	this.app.use('/api/planes',planesRoutes);
	
	//this.app.use('/api/cliente',clientesRoutes);
	//this.app.use('/api/rentas',rentasRoutes);



}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('Server on port',this.app.get('port'));
});
}

}
const server = new Server();
server.start();