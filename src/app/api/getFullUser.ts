import { getUserData } from '../../utils/function/getUserData';

export default async function handler (req, res) {
	try {
		if (req.method === 'POST') {
			const userData = await getUserData();
			return res.status(200).json(userData);
		}
	}
	catch (err) {
		return res.status(err?.code || 500).json(err?.message);
	}
	return res.status(404).json({ message: 'Not found' });
}
