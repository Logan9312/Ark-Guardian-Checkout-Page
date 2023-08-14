<script>
	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
		runtime: 'edge'
	};
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Vanquished Gaming Checkout Page</title>
	<meta name="description" content="Vanquished Gaming Checkout Page" />
	<meta property="og:url" content="https://vanquished-checkout-page.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Vanquished Gaming VIP Subscription" />
	<meta
		property="og:description"
		content="Subscribe now to become a VIP monthly supporter of Vanquished! Thanks in advance!"
	/>
	<meta property="og:image" content="/Logo_VP1-3.png" />
</svelte:head>

<slot />
