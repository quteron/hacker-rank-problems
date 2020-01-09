function vowelsAndConsonants(s) {
	var vowelList = ['a', 'e', 'i', 'o', 'u'];
	var vowels = [];
	var constants = [];

	for(letter of s) {
		if(vowelList.indexOf(letter) > -1) {
			vowels.push(letter);
		} else {
			constants.push(letter);
		}
	}

	var output = vowels.concat(constants);
	console.log(output.join('\n'));
}