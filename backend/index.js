if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
console.log(process.env.NODE_ENV);

const cors = require('cors'),
	express = require('express'),
	morgan = require('morgan'),
	multer = require('multer'),
	path = require('path');

// Initialization
const app = express();
require('./connect_db');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
	destination: path.join(__dirname, 'public/img-uploads'),
	filename(req, file, cb) {
		cb(null, new Date().getTime() + path.extname(file.originalname));
	},
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Rest API
app.use('/api/books', require('./rest_api/rest_api.js'));

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Start the server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});