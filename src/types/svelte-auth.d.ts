import { SvelteKitAuth, DefaultSession } from '@auth/core/types';

declare module '@auth/core/types' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's id. */
			id: string;
			discriminator: string;
		} & DefaultSession['user'];
	}
}
