import { EHeaderID } from '#data/constants/ReactID';
import { IElements } from '#data/types/common.d';

const { LOGO, HAMBURGER } = EHeaderID;

const Landing: IElements = {
	Logo: null,
	Hamburger: null,
};

export default function HeaderAnimation () {
	if (Object.values(Landing).some((element) => element === null)) {
		Landing.Logo = document.getElementById(LOGO);
		Landing.Hamburger = document.getElementById(HAMBURGER);
	}

	Landing.Logo?.style.setProperty('--displayColor', window.scrollY >= 25 ? 'white' : 'black');
	Landing.Hamburger?.style.setProperty('--displayColor', window.scrollY >= (window.innerWidth / 3.5) ? 'white' : 'black');
}
