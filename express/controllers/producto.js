const Producto = require('../models/producto.js');
const utils = require('../lib/utils.js');
const fs = require('fs');

const exposedFields = [
	'categoria',
	'nombre_producto',
	'descripcion_producto',
	'precio_producto',
	'imagen'
	];

module.exports = {
	
	
	verifyToken: (req,res,next)=>{
		const token = req.headers['authorization'];
		if (!token) res.status(401).json({
			error: true,
			message: 'Please register Log in using a valid email to submit posts'
		});
		utils.verifyToken(token)
			.then(function(producto){
				req.producto = producto;
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
		var producto = new Producto({
			...req.body
		});
		console.log(req.file)
		producto.imagen.data = fs.readFileSync(req.file.path)
		producto.imagen.contentType = 'image/png';

		producto
			.save()
			.then(result => {
				res.status(200).json({
					message: 'Producto creado exitosamente!',
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
		let query = {}
		if(req.query!==null){
			query = req.query
		}
		Producto.find(query)
			.select(exposedFields.join(' '))
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					data: docs.map(doc => {
						return {
							...doc['_doc'],
							imagen:doc['_doc']['imagen']?Buffer.from(doc['_doc']['imagen'].data).toString('base64'):null
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
		Producto.findById(id)
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
		Producto.update({_id: id},{$set: updateParams})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'producto updated!',
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
		Producto.remove({_id: id})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'producto deleted!'
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