import type { LayoutServerLoad } from './$types';
import { STRIPE_TOKEN } from '$env/static/private';
import { createCheckoutSession } from '$lib/stripe';

const VIP_SUB = 'price_1NIIjHHEkafLO3t8vlLNhlAK';
const BALLER_SUB = 'price_1NboKhHEkafLO3t8MX8Jt3AK';
const HIGH_ROLLER_SUB = 'price_1NboLXHEkafLO3t8Dw1bHfYk';

export const load: LayoutServerLoad = async (event) => {
	const page_session = await event.locals.getSession();
	let checkout_session = null;
	let portal = null;
	if (page_session) {
		const result = await createCheckoutSession(page_session, STRIPE_TOKEN, VIP_SUB);
		checkout_session = result.checkout_session;
		portal = result.portal;
	}

	return {
		session: page_session,
		checkout_url: checkout_session ? checkout_session.url : null,
		billing_portal_url: portal ? portal.url : null
	};
};
