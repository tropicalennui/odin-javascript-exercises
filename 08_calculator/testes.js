function sumTestes() {
	const start = 0;
	const args = Array.prototype.slice.call(arguments);
	const flatArgs = args.reduce((elem1, elem2) => elem1.concat(elem2));
	const sumArgs = flatArgs.reduce((a, b) => a + b, start);
	return parseInt(sumArgs);
};

function powTestes() {
	const args = Array.prototype.slice.call(arguments);
	//const flatArgs = args.reduce((elem1, elem2) => elem1.concat(elem2));
	const powArgs = args.reduce((a, b) => Math.pow(a, b));
	return parseInt(powArgs);
}

function facTestes() {
	const n = Array.prototype.slice.call(arguments);
	if (n == 0) { return 1 };
	return (n != 1) ? n * factorial(n - 1) : 1;
}