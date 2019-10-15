const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const studentsRoute = require('./Routes/Student');
const hallRoute = require('./Routes/Hall');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(studentsRoute);
app.use(hallRoute);

// const { populateHalls } = require('./Services/Hall');
// const { registerRoom } = require('./Services/Room');
const { registerStudent } = require('./Services/Student');

const PORT = process.env.PORT || 3030;

(async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/HallRegistraion', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('Connected to Database Successfully');
	} catch (e) {
		throw new Error(e);
	}
})();

// (async () => {
// 	const student = await registerStudent({
// 		name: 'Mushud',
// 		gender: 'Male',
// 		id: '10681289',
// 		pin: 1234
// 	});
// 	console.log(student);
// })();

app.listen(PORT, () => {
	console.log('Server Started');
});
