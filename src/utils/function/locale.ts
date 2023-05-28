import { fetcher } from './fetcher';

/**
 * Given a country name or code, return a country object with the following properties:
 * name: the country name
 * code: the country code
 * flag: the country flag
 * @param country - The country name or code to search for.
 * @returns An array of objects containing the country code, name, and flag.
 */
export const getCountry = async (country) => {
	return new Promise(async (resolve, reject) => {
		try {
			const countryList = await fetcher('https://flagcdn.com/en/codes.json'),
				countryName = countryList[country],
				countryCode = countryName ? country :
					Object.keys(countryList).find((code) => new RegExp('\\b' + country?.toLowerCase() + '\\b', 'i').test(countryList[code]));

			return resolve({
				name: countryName || country || '',
				code: countryCode || '',
				flag: countryCode ? `https://flagcdn.com/${countryCode.toLowerCase()}.svg` : ''
			});
		}
		catch (e) {
			return reject(e);
		}
	});
};

/**
 * Given a language name or code, return a language object with the following properties:
 * code: the language code
 * name: the language name
 * nativeName: the language name in the language itself
 * flag: the language flag
 * @param languages - an array of strings representing the languages to be included in the list.
 * @returns An array of objects containing the language code, name, native name, and flag.
 */
export const getLanguages = async (languages = []) => {
	return new Promise(async (resolve, reject) => {
		try {
			const languageJson = await fetcher('https://gist.githubusercontent.com/piraveen/fafd0d984b2236e809d03a0e306c8a4d/raw/languages.json'),
				languageList = Object.keys(languageJson).reduce((accumulator, languageCode) => {
					if (languages.includes(languageJson[languageCode].name.toLowerCase())) {
						accumulator.push({
							code: languageCode,
							name: languageJson[languageCode].name,
							nativeName: languageJson[languageCode].nativeName,
							flag: `https://unpkg.com/language-icons/icons/${languageCode}.svg`
						});
					}
					return accumulator;
				}, []);

			return resolve(languageList);
		}
		catch (e) {
			return reject(e);
		}
	});
};

