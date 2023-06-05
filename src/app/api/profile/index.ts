import { getGitProfile } from '../../../utils/github/gitFetch';

export default async function handler (req, res) {
	try {
		if (req.method === 'POST') {
			const profile = await getGitProfile();

			return res.status(200).json(profile);
		}
	}
	catch (err) {
		return res.status(err?.code || 500).json(err?.message);
	}
	return res.status(404).json({ message: 'Not found' });
}
