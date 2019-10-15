const { Router } = require('express');
const Halls = require('../Models/Hall');

const route = Router();

route.get('/halls', async (req, res) => {
	const allHalls = await Halls.find();
	res.status(202).send(allHalls);
});

route.get('/halls/private', async (req, res) => {
	const privateHalls = await Halls.find({ hallType: 'private' });
	res.status(202).send(privateHalls);
});

module.exports = route;
