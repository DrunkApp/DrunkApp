var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var inventario_schema = new Schema({
	_id:Number,
	producto_id:Number,
	cantidad:Number,
	estado:String,
	fecha_actualizacion:Number,
	
});
inventario_model = mongoose.model('inventario',inventario_schema,'inventario');
module.exports = {
	show: (req,res)=>{
		inventario_model.find({},(err,items)=>{
			if (!err) {
				res.render('Inventario',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			producto_id:req.body.producto_id,
			cantidad:req.body.cantidad,
			estado:req.body.estado,
			fecha_actualizacion:req.body.fecha_actualizacion,

			
		};
		inventario_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new inventario_model(item).save();
				res.redirect('/inventario');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		inventario_model.findOne({_id:req.body._id},(err,inventario)=>{
			res.render('editarInventario',{data: inventario});
		});
	},
	update:(req,res)=>{
		inventario_model.findOne({_id: req.body._id},(err,inventario)=>{
			inventario._id = req.body._id;
			inventario.producto_id = req.body.producto_id;
			inventario.cantidad = req.body.cantidad;
			inventario.estado = req.body.estado;
			inventario.fecha_actualizacion = req.fecha_actualizacion;
			

			inventario.save();
			res.redirect('/inventario');
		});
	},
	delete:(req,res)=>{
		inventario_model.findOne({_id: req.body._id},(err,inventario)=>{
			inventario.remove();
			res.redirect('/inventario');
		});
	},
}