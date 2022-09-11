const fibonacci = function (num) {
	if (num < 0) {
		return 'OOPS';
	}
	let skipZero = num + 1;
	let sequence = Array.from({ length: skipZero }).reduce(
		(acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []
	);
	return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
