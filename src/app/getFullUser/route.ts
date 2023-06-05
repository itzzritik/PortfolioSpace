import { NextResponse } from 'next/server';

import { getUserData } from '../../utils/function/getUserData';

export async function GET () {
	try {
		const userData = await getUserData();
		return NextResponse.json(userData);
	}
	catch (err) {
		return NextResponse.json(err);
	}
}
