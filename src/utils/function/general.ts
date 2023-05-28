/**
 * Split a sentence into two equal parts by letters.
 * @param sentence - The sentence to split e.g. 'Hello World! I am Ritik'.
 * @returns ['Hello World!', 'I am Ritik']
 */
export const splitSentence = (sentence = '') => {
	const middle = Math.floor(sentence.length / 2);

	for (let i = 0; i < middle; i++) {
		if (sentence[middle + i] === ' ') {
			return [sentence.substring(0, middle + i), sentence.substring(middle + i + 1, sentence.length)];
		}
		if (sentence[middle - i] === ' ') {
			return [sentence.substring(0, middle - i), sentence.substring(middle - i + 1, sentence.length)];
		}
	}
};
