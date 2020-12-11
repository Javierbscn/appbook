if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
console.log(process.env.NODE_ENV);

const cors = require('cors'),
    express = require('express'),
    morgan = require('morgan'),
    multer = require('multer'),
    path = require('path');
const { json } = require('express');

// Initialization
const app = express();
require('./connect_db')

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Rest API
app.use('/api/books', require('./rest_api/rest_api.js'))

// Static files

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})