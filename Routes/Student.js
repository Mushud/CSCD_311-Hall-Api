const { Router } = require('express');
const Students = require('../Models/Students');
const { registerStudent } = require('../Services/Student');
const route = Router();

route.get('/students', async (req, res) => {
	const students = await Students.find();
	res.status(202).send(students);
});

route.post('/registerStudent', async (req, res) => {
	await registerStudent(req.body);
	res.status(202).send('done');
});

route.post('/login', async (req, res) => {
	const id = req.body.id;
	const pin = req.body.pin;
	const Student = await Students.findOne({ id });
	console.log(req.body);
	if (Student !== null) {
		if (Number(pin) !== Student.pin) {
			res.status(404).send('incorrect');
		} else {
			res.status(200).json(Student);
		}
	} else {
		res.status(404).send('incorrect');
	}
});

module.exports = route;
