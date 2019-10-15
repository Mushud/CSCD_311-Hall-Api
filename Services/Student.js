const Student = require('../Models/Students');
const Room = require('../Models/Room');

module.exports.registerStudent = async ({ name, gender, id, pin }) => {
	const student = new Student({
		id,
		name,
		gender,
		pin
	});

	try {
		return await student.save();
	} catch (e) {
		throw new Error(e);
	}
};
