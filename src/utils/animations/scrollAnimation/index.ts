import LandingAnimation from './landingAnimation';

export default function ScrollAnimation () {
	document.addEventListener('scroll', () => {
		LandingAnimation();
	});
}
