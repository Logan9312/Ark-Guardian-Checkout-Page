<script>
	import { onMount } from 'svelte';
	import { signOut } from '@auth/sveltekit/client';
	onMount(() => {
		signOut('discord');
		window.location.href = '/';
	});
</script>
