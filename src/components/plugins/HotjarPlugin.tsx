'use client';

import { useLayoutEffect } from 'react';

import Hotjar from '@hotjar/browser';

export default function HotjarPlugin () {
	useLayoutEffect(() => {
		Hotjar.init(parseInt(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID ?? ''), 6);
	}, []);
	return null;
}
