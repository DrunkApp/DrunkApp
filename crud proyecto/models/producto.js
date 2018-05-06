var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var producto_schema = new Schema({
	_id:Number,
	numero_producto:String,
	descripcion_producto:String,
	
});
producto_model = mongoose.model('producto',producto_schema,'producto');
module.exports = {
	show: (req,res)=>{
		producto_model.find({},(err,items)=>{
			if (!err) {
				res.render('Producto',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			numero_producto:req.body.numero_producto,
			descripcion_producto:req.body.descripcion_producto,
			
		};
		producto_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new producto_model(item).save();
				res.redirect('/producto');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		producto_model.findOne({_id:req.body._id},(err,producto)=>{
			res.render('editarProducto',{data: producto});
		});
	},
	update:(req,res)=>{
		producto_model.findOne({_id: req.body._id},(err,producto)=>{
			producto._id = req.body._id;
			producto.numero_producto = req.body.numero_producto;
			producto.descripcion_producto = req.body.descripcion_producto;
			

			producto.save();
			res.redirect('/producto');
		});
	},
	delete:(req,res)=>{
		producto_model.findOne({_id: req.body._id},(err,producto)=>{
			producto.remove();
			res.redirect('/producto');
		});
	},
}