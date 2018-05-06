var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var categoria_schema = new Schema({
	_id:Number,
	producto_id:String,
	nombre_categoria:String,
	
});
categoria_model = mongoose.model('categoria',categoria_schema,'categoria');
module.exports = {
	show: (req,res)=>{
		categoria_model.find({},(err,items)=>{
			if (!err) {
				res.render('Categoria',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			producto_id:req.body.producto_id,
			nombre_categoria:req.body.nombre_categoria,
			
		};
		categoria_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new categoria_model(item).save();
				res.redirect('/categoria');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		categoria_model.findOne({_id:req.body._id},(err,categoria)=>{
			res.render('editarCategoria',{data: categoria});
		});
	},
	update:(req,res)=>{
		categoria_model.findOne({_id: req.body._id},(err,categoria)=>{
			categoria._id = req.body._id;
			categoria.producto_id = req.body.producto_id;
			categoria.nombre_categoria = req.body.nombre_categoria;
			

			categoria.save();
			res.redirect('/categoria');
		});
	},
	delete:(req,res)=>{
		categoria_model.findOne({_id: req.body._id},(err,categoria)=>{
			categoria.remove();
			res.redirect('/categoria');
		});
	},
}