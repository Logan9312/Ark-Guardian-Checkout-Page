import type { LayoutServerLoad } from './$types';
import { STRIPE_TOKEN } from '$env/static/private';
import { createCheckoutSession } from '$lib/stripe';

const GUARDIAN_SUB = 'price_1LXBAWHUrL82UzZ3G31cWRNp';

export const load: LayoutServerLoad = async (event) => {
	const page_session = await event.locals.getSession();
	let checkout_session = null;
	let portal = null;
	if (page_session) {
		const result = await createCheckoutSession(page_session, STRIPE_TOKEN, GUARDIAN_SUB);
		checkout_session = result.checkout_session;
		portal = result.portal;
	}

	return {
		session: page_session,
		checkout_url: checkout_session ? checkout_session.url : null,
		billing_portal_url: portal ? portal.url : null
	};
};
