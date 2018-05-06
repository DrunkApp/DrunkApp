var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var registro_schema = new Schema({
	_id:Number,
	pedido_id:Number,
	producto_id:Number,
	
});
registro_model = mongoose.model('registro',registro_schema,'registro');
module.exports = {
	show: (req,res)=>{
		registro_model.find({},(err,items)=>{
			if (!err) {
				res.render('Registro',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			pedido_id:req.body.pedido_id,
			producto_id:req.body.producto_id,
			
		};
		registro_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new registro_model(item).save();
				res.redirect('/registro');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		registro_model.findOne({_id:req.body._id},(err,registro)=>{
			res.render('editarRegistro',{data: registro});
		});
	},
	update:(req,res)=>{
		registro_model.findOne({_id: req.body._id},(err,registro)=>{
			registro._id = req.body._id;
			registro.pedido_id = req.body.pedido_id;
			registro.producto_id = req.body.producto_id;
			

			registro.save();
			res.redirect('/registro');
		});
	},
	delete:(req,res)=>{
		registro_model.findOne({_id: req.body._id},(err,registro)=>{
			registro.remove();
			res.redirect('/registro');
		});
	},
}