import Sequelize from 'sequelize'
import { sequelize } from '../database/database'
import Task from './Task'
//temgo la coenxion y algunas propiedades q viene de sequelize
//necesito definir el modelo de datos de la bd (tbm se peude usar clases)
const Project = sequelize.define('projects',{
    id : {
        type: Sequelize.INTEGER,
        primaryKey :true
    },
    name:{
        type: Sequelize.TEXT
    },
    priority:{
        type: Sequelize.INTEGER
    },
    description:{
        type:Sequelize.TEXT
    },
    deliverydate:{
        type:Sequelize.DATE
    }
},{
    timestamps:false   //siproblema pra fechas
}
);

Project.hasMany(Task,{ foreignKey:'projectid', sourceKey:'id'}); //relacionamos projecto con las tareas ,a travez de la clave foranea
Task.belongsTo(Project, {foreignKey: 'projectid', sourceKey:'id'});

export default Project;