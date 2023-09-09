<script>
	let flipped = false;
</script>

<button class:flipped on:keydown on:click={() => (flipped = !flipped)} on:click class="flipped">
	<img src="/imgs/down.svg" alt="open or close" class="w-4 opacity-80"/>
</button>

<style>
	.flipped {
		rotate: 180deg;
	}
</style>
