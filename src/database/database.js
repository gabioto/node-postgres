import Sequelize from "sequelize";
// parametros: bd, nombre_usuario,password, - host, tipo_db
//seeuelize : [dialecto] permite conectarte adistitntas ds, psostgress maridb, myswl, sqlite
//pool :para q tenga mutiples hilos de conexion
export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    '75809581',
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        },
        logging: false
    }
)