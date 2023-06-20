import HeaderAnimation from './headerAnim';
import LandingAnimation from './landingAnim';

export default function ScrollAnimation () {
	['scroll', 'resize'].forEach((event) =>
		window.addEventListener(event, () => {
			// console.time('ScrollAnimation');
			LandingAnimation();
			HeaderAnimation();

			// console.timeEnd('ScrollAnimation');
		}),
	);
}
