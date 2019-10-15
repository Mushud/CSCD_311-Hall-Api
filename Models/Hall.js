const { Schema, model } = require('mongoose');

let Hall = new Schema({
	hallType: { type: String, enum: ['traditional', 'diaspora', 'private'] },
	name: { type: String },
	rooms: { type: Number, default: 0 },
	capacity: { type: Number, default: 100 }
});

module.exports = model('Halls', Hall);
