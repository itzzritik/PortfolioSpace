import LandingAnimation from './landingAnimation';

export default function ScrollAnimation () {
	['scroll', 'resize'].forEach((event) =>
		window.addEventListener(event, () => {
			console.log(event);

			// console.time('ScrollAnimation');
			LandingAnimation();

			// console.timeEnd('ScrollAnimation');
		}),
	);
}
