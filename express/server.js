const express = require('express');
const app = express();
const fs = require('fs')
const multer = require('multer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





app.set('view engine','jade');
app.use(express.static('public'));




const port = process.env.PORT || 5000;

app.use("/", function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

app.options("/*", function(req,res,next){
	res.sendStatus(200);
});

const router = express.Router();

router.get('/', function(req,res){
	res.json({message: 'bienvenido a nuestra api drunkapp!!!'});
});

const userRouter = require('./routes/user');
router.use('/user',userRouter);

const productoRouter = require('./routes/producto');
router.use('/producto',productoRouter);

const categoriaRouter = require('./routes/categoria');
router.use('/categoria',categoriaRouter);

const pedidoRouter = require('./routes/pedido');
router.use('/pedido',pedidoRouter);

app.use(multer({dest: './uploads/',
	rename: function ( fieldname, filename) {
		return filename;
	},
}).single('imagen'));

app.use('/apidrunk', router);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drunkapp_blog');
mongoose.Promise = global.Promise;


app.use((req,res)=>{
	res.render('main');
});


app.listen(port);
console.log('La magia sucede en el puerto ' + port);