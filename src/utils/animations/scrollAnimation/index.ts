import LandingAnimation from './landingAnimation';

export default function ScrollAnimation () {
	document.addEventListener('scroll', () => {
		// console.time('ScrollAnimation');
		LandingAnimation();

		// console.timeEnd('ScrollAnimation');
	});
}
