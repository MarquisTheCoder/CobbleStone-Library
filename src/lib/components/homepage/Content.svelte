<script>
	import ScrollProgress from '@pluginjs/scroll-progress';
	import '@pluginjs/scroll-progress/dist/scroll-progress.css';
	let options = {
		size: 5,
		color: '#000000',
		opacity: 1,
		custom: true,
		appendTo: 'body',
		position: 'top-left',
		templates: {}
	};
	ScrollProgress.of(document.querySelector('.library'), options);
</script>

<section id="content" class="h-[40rem] w-screen bg-emerald-500/50">
	<div class="library" />
</section>
