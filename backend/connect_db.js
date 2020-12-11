const mongoose = require('mongoose');

const connected = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('DB is connected');
	} catch (error) {
		console.log(error);
	}
};

connected();