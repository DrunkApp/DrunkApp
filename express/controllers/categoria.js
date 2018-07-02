const Categoria = require('../models/categoria.js');
const utils = require('../lib/utils.js');

const exposedFields = [
	'nombre_categoria'
	];

module.exports = {
	
	
	verifyToken: (req,res,next)=>{
		const token = req.headers['authorization'];
		if (!token) res.status(401).json({
			error: true,
			message: 'Please register Log in using a valid email to submit posts'
		});
		utils.verifyToken(token)
			.then(function(categoria){
				req.categoria = categoria;
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
		var categoria = new Categoria({
			...req.body
		});
		categoria
			.save()
			.then(result => {
				res.status(200).json({
					message: 'Categoria succesfully created!',
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
		Categoria.find()
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
		Categoria.findById(id)
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
		Categoria.update({_id: id},{$set: updateParams})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Categoria updated!',
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
		Categoria.remove({_id: id})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Categoria deleted!'
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