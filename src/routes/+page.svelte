<script>
	import { onMount } from 'svelte';
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	onMount(() => {
		if ($page.data.billing_portal_url) {
			window.location.href = $page.data.billing_portal_url;
		} else if ($page.data.session) {
			window.location.href = $page.data.checkout_url;
		} else {
			signIn('discord');
		}
	});
</script>

<svelte:head>
	<meta property="og:title" content="Purchase Access To Ark Guardian." />
	<meta
		property="og:description"
		content="Subscribe now to become a premium subscriber of Ark Guardian! Thanks in advance!"
	/>
</svelte:head>
