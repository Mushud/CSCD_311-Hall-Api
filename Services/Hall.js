const Hall = require('../Models/Hall');

module.exports.getHal = async (hall) => {
	return await Hall.findOne({ name: hall });
};
module.exports.populateHalls = async () => {
	const hallsTraditional = [
		'Mensah Sarbah Hall',
		'Legon Hall',
		'Akuafo Hall',
		'Volta Hall',
		'Common Wealth Hall'
	];
	const hallsDiaspora = [
		'Dr, Hilla Limann Hall',
		'Alexender Kwapong Hall',
		'Elizabeth Sey Hall',
		'Jean Nelson Hall'
	];
	const hallsPrivate = ['Bani Hall', 'African Union', 'Evandy Hall'];

	for (var i = 0; i < hallsTraditional.length; i++) {
		let hall = new Hall({
			name: hallsTraditional[i],
			hallType: 'traditional',
			capacity: 200
		});
		await hall.save();
	}
	console.log('Traditinal Entry Done');

	for (var i = 0; i < hallsDiaspora.length; i++) {
		let hall = new Hall({
			name: hallsDiaspora[i],
			hallType: 'diaspora',
			capacity: 400
		});
		await hall.save();
	}
	console.log('Diaspora Halls Done');

	for (var i = 0; i < hallsPrivate.length; i++) {
		let hall = new Hall({
			name: hallsPrivate[i],
			hallType: 'private',
			capacity: 100
		});
		await hall.save();
	}
	console.log('Private done');
};
