import { SvelteKitAuth } from '@auth/sveltekit';
import type { Session } from '@auth/core/types';
import Discord from '@auth/core/providers/discord';
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_CLIENT_SECRET })],
	callbacks: {
		async jwt({ token, user }) {
			// Destructure the parameters to get `token` and `user`
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }: { session: Session; token: any }) {
			// Destructure the parameters to get `session` and `token`
			session.user.id = token.id;
			session.user.discriminator = token.discriminator;
			return session;
		}
	}
});
