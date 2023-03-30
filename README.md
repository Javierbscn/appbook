# App book
This is a complete application (frontend and backend) that is responsible for saving the data of a book entered in a database.
It was made with HTML, Bootstrap4, JavaScript, Node.js, Express.js, Mongoose, MongoDB, Webpack, Multer.js and Cloudinary (to store images)

## Installation
1. `npm install`
2. `npm run start`

Note: You need to run [MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/) locally by creating a database called "appbookdb". And configure the `.env` file in the root of the project with environment variables for the correct operation of the app:
```
MONGODB_URI
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

3. Go to the `https://localhost:3000` for run app.

## App in production
It's [avaible here](https://appbookjs.glitch.me/)
