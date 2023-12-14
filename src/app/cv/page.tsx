'use client';

import { useLayoutEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function CV () {
	const router = useRouter();

	useLayoutEffect(() => {
		router.replace('https://go.ritik.me/resume');
	}, [router]);

	return null;
}
