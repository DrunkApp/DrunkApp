var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bddrunkapp');

var usuario_schema = new Schema({
	_id:Number,
	celular:Number,
	dni:Number,
	nick:String,
	password:String,
	correo:String,
	direccion:String,
});
usuario_model = mongoose.model('usuario',usuario_schema,'usuario');
module.exports = {
	show: (req,res)=>{
		usuario_model.find({},(err,items)=>{
			if (!err) {
				res.render('Usuario',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			celular:req.body.celular,
			dni:req.body.dni,
			nick:req.body.nick,
			password:req.body.password,
			correo:req.body.correo,
			direccion:req.body.direccion,
		};
		usuario_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new usuario_model(item).save();
				res.redirect('/usuario');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		usuario_model.findOne({_id:req.body._id},(err,usuario)=>{
			res.render('editarUsuario',{data: usuario});
		});
	},
	update:(req,res)=>{
		usuario_model.findOne({_id: req.body._id},(err,usuario)=>{
			usuario._id = req.body._id;
			usuario.celular = req.body.celular;
			usuario.dni = req.body.dni;
			usuario.nick = req.body.nick;
			usuario.password = req.body.password;
			usuario.correo = req.body.correo;
			usuario.direccion = req.body.direccion;

			usuario.save();
			res.redirect('/usuario');
		});
	},
	delete:(req,res)=>{
		usuario_model.findOne({_id: req.body._id},(err,usuario)=>{
			usuario.remove();
			res.redirect('/usuario');
		});
	},
}