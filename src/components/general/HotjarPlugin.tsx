'use client';

import Hotjar from '@hotjar/browser';

Hotjar.init(parseInt(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID ?? ''), 6);
export default function HotjarPlugin () {
	return null;
}
