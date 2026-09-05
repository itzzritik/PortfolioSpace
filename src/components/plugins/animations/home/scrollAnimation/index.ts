import HeaderAnimation from "./headerAnim";
import LandingAnimation from "./landingAnim";
import ProfileAnimation from "./profileAnim";

export default function ScrollAnimation() {
	const animate = () => {
		HeaderAnimation(LandingAnimation());
		ProfileAnimation();
	};

	for (const event of ["scroll", "resize"]) window.addEventListener(event, animate);
	animate();
}
