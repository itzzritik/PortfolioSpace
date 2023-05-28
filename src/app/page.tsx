import { getUserData } from '@/utils/function/getUserData';
import { useEffect, useState } from 'react';


export default function Home () {
	return (
		<div />
	);
}

export const getStaticProps = async () => {
	const staticUser = await getUserData();

	return {
		props: { staticUser },
		revalidate: 10
	};
};
