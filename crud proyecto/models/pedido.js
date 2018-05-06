var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var pedido_schema = new Schema({
	_id:Number,
	usuario_id:Number,
	estado:String,
	fecha_pedido:Number,
	precio:Number,
	
});
pedido_model = mongoose.model('pedido',pedido_schema,'pedido');
module.exports = {
	show: (req,res)=>{
		pedido_model.find({},(err,items)=>{
			if (!err) {
				res.render('Pedido',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			usuario_id:req.body.usuario_id,
			estado:req.body.estado,
			fecha_pedido:req.body.fecha_pedido,
			precio:req.body.precio,

			
		};
		pedido_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new pedido_model(item).save();
				res.redirect('/pedido');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		pedido_model.findOne({_id:req.body._id},(err,pedido)=>{
			res.render('editarPedido',{data: pedido});
		});
	},
	update:(req,res)=>{
		pedido_model.findOne({_id: req.body._id},(err,pedido)=>{
			pedido._id = req.body._id;
			pedido.usuario_id = req.body.usuario_id;
			pedido.estado = req.body.estado;
			pedido.fecha_pedido = req.body.fecha_pedido;
			pedido.precio = req.body.precio;
			

			pedido.save();
			res.redirect('/pedido');
		});
	},
	delete:(req,res)=>{
		pedido_model.findOne({_id: req.body._id},(err,pedido)=>{
			pedido.remove();
			res.redirect('/pedido');
		});
	},
}