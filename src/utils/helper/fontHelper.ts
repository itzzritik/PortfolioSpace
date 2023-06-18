import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
	weight: ['200', '300', '400', '500'],
	fallback: ['sans-serif', 'system-ui'],
	subsets: ['latin'],
	variable: '--montserrat',
});
