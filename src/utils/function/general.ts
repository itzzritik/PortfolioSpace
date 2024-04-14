import { IDateFormat } from '#data/types/common.d';

/**
 * Split a sentence into two equal parts by letters.
 * @param sentence - The sentence to split e.g. 'Hello World! I am Ritik'.
 * @returns ['Hello World!', 'I am Ritik']
 */
export const splitSentence = (sentence: string) => {
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

export const base64ToJson = <T = object>(base64String: string) => {
	const json = Buffer.from(base64String, 'base64').toString();
	return JSON.parse(json) as T;
};

export const calculateAge = (birthDateString: string): IDateFormat => {
	const currentDate = new Date();
	const birthDate = new Date(birthDateString);
	const totalMilliseconds = currentDate.getTime() - birthDate.getTime();

	const millisecondsPerSecond = 1000;
	const millisecondsPerMinute = 60 * millisecondsPerSecond;
	const millisecondsPerHour = 60 * millisecondsPerMinute;
	const millisecondsPerDay = 24 * millisecondsPerHour;
	const millisecondsPerYear = 365.25 * millisecondsPerDay;

	const years = Math.floor(totalMilliseconds / millisecondsPerYear);
	const remainingMilliseconds = totalMilliseconds - (years * millisecondsPerYear);

	const months = Math.floor(remainingMilliseconds / (30.4375 * millisecondsPerDay));
	const remainingMillisecondsAfterMonths = remainingMilliseconds - (months * 30.4375 * millisecondsPerDay);

	const days = Math.floor(remainingMillisecondsAfterMonths / millisecondsPerDay);
	const remainingMillisecondsAfterDays = remainingMillisecondsAfterMonths - (days * millisecondsPerDay);

	const hours = Math.floor(remainingMillisecondsAfterDays / millisecondsPerHour);
	const remainingMillisecondsAfterHours = remainingMillisecondsAfterDays - (hours * millisecondsPerHour);

	const minutes = Math.floor(remainingMillisecondsAfterHours / millisecondsPerMinute);
	const remainingMillisecondsAfterMinutes = remainingMillisecondsAfterHours - (minutes * millisecondsPerMinute);

	const seconds = Math.floor(remainingMillisecondsAfterMinutes / millisecondsPerSecond);

	// const milliseconds = remainingMillisecondsAfterMinutes - (seconds * millisecondsPerSecond);

	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds,
	};
};
