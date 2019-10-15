const Room = require('../Models/Room');
const { getHal } = require('../Services/Hall');

module.exports.registerRoom = async (hallD) => {
	let gender = 'Male';
	const hall = await getHal(hallD);
	if (hall) {
		for (var i = 0; i < hall.capacity; i++) {
			const room = new Room({
				hallid: hall._id,
				type: gender,
				id: i + 1001
			});
			try {
				room.save();
			} catch (e) {
				throw new Error(e);
			}
			if (gender === 'Male') {
				gender = 'Female';
			} else gender = 'Male';
		}
		console.log('Rooms Populated Successfully');
	} else {
		console.log('Hall does not exist');
	}
};
