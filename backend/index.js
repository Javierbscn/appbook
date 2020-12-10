if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
console.log(process.env.NODE_ENV);

const cors = require('cors'),
    express = require('express'),
    morgan = require('morgan'),
    multer = require('multer'),
    path = require('path');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))

// Static files

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})