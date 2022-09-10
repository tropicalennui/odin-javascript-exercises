const palindromes = function (str) {
	str = str
		.toLowerCase()
		.replace(/[^a-z]/g, "");
	let isPalindrome = false;
	let reversed = Array.from(str);
	reversed = reversed
		.reverse()
		.join('');
	if (reversed == str) { isPalindrome = true; }
	return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
