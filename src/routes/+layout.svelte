<script>
	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
		runtime: 'edge'
	};
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Ark Guardian Checkout Page</title>
	<meta name="description" content="Purchase Ark Guardian" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Purchase Access To Ark Guardian." />
	<meta
		property="og:description"
		content="Subscribe now to become a VIP monthly supporter of Vanquished! Thanks in advance!"
	/>
	<meta property="og:image" content="/logo.png" />
</svelte:head>

<slot />
