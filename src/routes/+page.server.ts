import { getPortfolioData } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	return await getPortfolioData();
};
