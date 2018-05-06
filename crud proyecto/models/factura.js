var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var factura_schema = new Schema({
	_id:Number,
	usuario_id:Number,
	producto_id:Number,
	nro_comprobante:String,
	fecha:String,
	detalles:String,
	total:Number,
});
factura_model = mongoose.model('factura',factura_schema,'factura');
module.exports = {
	show: (req,res)=>{
		factura_model.find({},(err,items)=>{
			if (!err) {
				res.render('factura',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			usuario_id:req.body.usuario_id,
			producto_id:req.body.producto_id,
			nro_comprobante:req.body.nro_comprobante,
			fecha:req.body.fecha,
			detalles:req.body.detalles,
			total:req.body.total,
		};
		factura_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new factura_model(item).save();
				res.redirect('/factura');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		factura_model.findOne({_id:req.body._id},(err,factura)=>{
			res.render('editarFactura',{data: factura});
		});
	},
	update:(req,res)=>{
		factura_model.findOne({_id: req.body._id},(err,factura)=>{
			factura._id = req.body._id;
			factura.usuario_id = req.body.usuario_id;
			factura.producto_id = req.body.producto_id;
			factura.nro_comprobante = req.body.nro_comprobante;
			factura.fecha = req.body.fecha;
			factura.detalles = req.body.detalles;
			factura.total = req.body.total;

			factura.save();
			res.redirect('/factura');
		});
	},
	delete:(req,res)=>{
		factura_model.findOne({_id: req.body._id},(err,factura)=>{
			factura.remove();
			res.redirect('/factura');
		});
	},
}