import HeaderAnimation from "./headerAnim";
import LandingAnimation from "./landingAnim";
import ProfileAnimation from "./profileAnim";

export default function ScrollAnimation() {
	["scroll", "resize"].forEach((event) =>
		window.addEventListener(event, () => {
			// console.time('ScrollAnimation');
			LandingAnimation();
			HeaderAnimation();
			ProfileAnimation();

			// console.timeEnd('ScrollAnimation');
		}),
	);
}
