export const getCountry = async (country = '') => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await fetch('https://flagcdn.com/en/codes.json');
			const countryList = await res.json();

			const countryName = countryList[country];
			const countryCode = countryName 
				? country 
				: Object.keys(countryList).find((code) => {
						return new RegExp('\\b' + country?.toLowerCase() + '\\b', 'i').test(countryList[code])
					});

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

export const getLanguages = async (languages: string[] = []) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await fetch('https://gist.githubusercontent.com/piraveen/fafd0d984b2236e809d03a0e306c8a4d/raw/languages.json');
			const languageJson: ILanguageJson = await res.json();
			
			const languageList = Object.keys(languageJson).reduce((accumulator: TLanguage[], languageCode) => {
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

export interface ILanguageJson {
	[k: string]: {
		name: string;
		nativeName: string;
	}
}
type TLanguage = {
	code: string,
	name: string,
	nativeName: string,
	flag: string
}


