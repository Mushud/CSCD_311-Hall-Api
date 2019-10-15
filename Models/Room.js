const { Schema, model } = require('mongoose');

let Room = new Schema({
	id: { type: String },
	students: [{ id: { type: String } }],
	capacity: { type: Number, default: 4 },
	type: { type: { String }, enum: ['Male', 'Female'] },
	hallid: { type: String }
});

module.exports = model('Rooms', Room);
