const { Schema, model } = require('mongoose');
const clienteSchema = new Schema({
        titulo: String,
        dependencia: String,
        fecha: String,
        parrafo1: String,
        parrafo2: String,
        parrafo3: String,
        // img_titulo: {type:file},
        // img_publicacion: {type:file}

        // nombre_responsable: String,
        // email: String,
        // categoria: String,
        // Titulo: String,
        // descripccion: String,
        // descripccion_dos: String,
})

module.exports = model('noticias', clienteSchema);