const Pedido = require('../models/pedido.js');
const utils = require('../lib/utils.js');

const exposedFields = [
	'usuario_id',
	'nombre_producto',
	'cantidad_producto',
	'precio_producto'
	];

module.exports = {
	
	
	verifyToken: (req,res,next)=>{
		const token = req.headers['authorization'];
		if (!token) res.status(401).json({
			error: true,
			message: 'Please register Log in using a valid email to submit posts'
		});
		utils.verifyToken(token)
			.then(function(user){
				req.user = user;
				next();
			})
			.catch(function(err){
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	},
	create: (req,res,next)=>{
		var pedido = new Pedido({
			...req.body,
			usuario_id: req.user._id
		});
		pedido
			.save()
			.then(result => {
				res.status(200).json({
					message: 'Pedido creado exitosamente!',
					data:{
						...result['_doc']
					}
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	find: (req,res,next) => {
		let query = {};
		query.usuario_id = req.user._id;
		Pedido.find(query)
			.select(exposedFields.join(' '))
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					data: docs.map(doc => {
						return {
							...doc['_doc']
						};
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	findOne: (req,res,next) => {
		const id = req.params.id;
		Pedido.findById(id)
			.exec()
			.then(doc => {
				if (doc) {
					res.status(200).json({
						data: doc['_doc'],
					});
				}else{
					res.status(404).json({message: 'No valid entry found for provided ID'});
				}
			})
			.catch(err =>{
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	update: (req,res,next) => {
		const id = req.params.id;
		let updateParams = {
			...req.body
		};
		Pedido.update({_id: id},{$set: updateParams})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Pedido updated!',
					data: result['_doc']
				});
			})
			.catch(err =>{
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	},
	delete: (req,res,next) => {
		const id = req.params.id;
		Pedido.remove({_id: id})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Pedido eliminado!'
				});
			})
			.catch(err =>{
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},

	delete_all: (req,res,next) => {
		let query = {};
		query.usuario_id = req.user._id;
		Pedido.remove(query)
		
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Pedido eliminado!'
				});
			})
			.catch(err =>{
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	}
};