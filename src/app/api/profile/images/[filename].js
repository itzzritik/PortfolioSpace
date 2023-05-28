import { gitUser, getGitUser, profileUrl } from '../../../../utils/github/gitFetch';

export default async function handler (req, res) {
	try {
		if (req.method === 'GET') {
			if (!gitUser) {
				gitUser = (await getGitUser('login')).login;
			}

			const request = await fetch(`${profileUrl()}/images/${req?.query?.filename}`);
			return request.body.pipe(res);
		}
	}
	catch (err) {
		return res.status(err?.code || 500).json(err?.message);
	}
	return res.status(404).json({ message: 'Not found' });
}
