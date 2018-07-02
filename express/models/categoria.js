const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categoriaSchema = new Schema({
	
	nombre_categoria: {
		type: String,
		required: true
	},
	
});


const categoriaModel = mongoose.model('categorias', categoriaSchema);

module.exports = categoriaModel;