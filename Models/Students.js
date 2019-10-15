const { Schema, model } = require('mongoose');

let Student = new Schema({
	id: { type: String },
	name: { type: String },
	gender: { type: String, enum: ['Male', 'Female'] },
	room: { type: String },
	hall: { type: String },
	pin: { type: Number }
});

module.exports = model('Students', Student);
