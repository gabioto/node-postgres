//inciar configurando servidor
import express, {json} from 'express';
import morgan  from 'morgan';
//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';
//initialization
const app =  express();

//middlewars
app.use(morgan('dev'));  // se ecnarga de leer por consola las peticiones
app.use(json()); //entender los archivos json

//routes
app.use('api/projects',projectRoutes);
app.use('api/tasks',taskRoutes);


export default app;