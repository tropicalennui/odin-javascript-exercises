const findTheOldest = function (array) {

	const currentYear = new Date().getFullYear();

	let result = array.reduce((a, b) => {
		if (a.yearOfDeath == null) {
			a.yearOfDeath = currentYear;
		}
		if (b.yearOfDeath == null) {
			b.yearOfDeath = currentYear;
		}
		return a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? b : a;
	});

	return result;

};

// Do not edit below this line
module.exports = findTheOldest;
