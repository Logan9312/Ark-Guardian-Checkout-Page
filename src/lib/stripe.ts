import Stripe from 'stripe';
import type { Session } from '@auth/core/types';

export const createCheckoutSession = async (page_session: Session, token: string, sub: string) => {
	let checkout_session = null;
	let portal = null;

	const stripe = new Stripe(token, {
		apiVersion: '2022-11-15'
	});
	checkout_session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		line_items: [
			{
				price: sub,
				quantity: 1
				/* 				adjustable_quantity: {
					enabled: true
				} */
			}
		],
		success_url: `/Success`,
		cancel_url: `https://vanquished-checkout-page.vercel.app/signout`,
		subscription_data: {
			metadata: {
				discord_id: page_session.user.id
			}
		}
	});
	if (checkout_session.customer) {
		portal = await stripe.billingPortal.sessions.create({
			customer: checkout_session.customer.toString(),
			return_url: 'https://vanquished.gg/'
		});
	} else {
		const subscription = await stripe.subscriptions.search({
			query: `metadata['discord_id']:'${page_session.user.id}'`
		});
		if (subscription.data.length > 0) {
			portal = await stripe.billingPortal.sessions.create({
				customer: subscription.data[0].customer.toString(),
				return_url: 'https://vanquished.gg/'
			});
		}
	}

	return { checkout_session, portal };
};
