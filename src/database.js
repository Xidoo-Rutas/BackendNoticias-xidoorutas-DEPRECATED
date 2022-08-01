const mongose = require('mongoose');
const {URI, db} = require('./configs/databaseConfigs')

const dbConection = async() => {
    try {
        console.log('Esperando la conexion con el servicio mongod');
        await mongose.connect(URI);
        console.log('Conectado a ' + db);

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    dbConection
};