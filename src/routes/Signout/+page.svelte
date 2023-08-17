<script>
	import { onMount } from 'svelte';
	import { signOut } from '@auth/sveltekit/client';
	onMount(() => {
		signOut('discord');
		window.location.href = '/';
	});
</script>

<svelte:head>
	<meta property="og:title" content="Ark Guardian Checkout Sign Out" />
	<meta property="og:description" content="Sign out of your discord account for checkout." />
</svelte:head>
