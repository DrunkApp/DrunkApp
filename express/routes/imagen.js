
const  multer = require('multer');
const Imagen = require('../controllers/producto');


const storage = multer.diskStorage({
	destination: function(req, file, cb){
		console.log("files: " + file);+
		cb(null,'./uploads/');
	},
	filename: function (req, file, cb){
		cb(null, new Date().toISOString().replace(/:/g,'-') + file.originalname);

	}

});

const fileFilter = (req,file,cb) => {
	if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
		cb(null, false);

	}else{
		cb(null,false);

	}
};

const upload = multer({
	storage: storage,
	limits {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
});

router.get('/test',Imagen.test);
router.get('/find',Imagen.find);
router.post('/search',Imagen.search);
router.post('/edit', Imagen.edit);
router.post('/update', upload.array('imagen', 10), Imagen.update);