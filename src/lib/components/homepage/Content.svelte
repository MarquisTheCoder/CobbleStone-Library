<script>
	import BookLink from './BookLink.svelte';
</script>

<section id="content" class="h-[40rem] w-screend px-32 mt-24">
	<div class="library h-full w-full flex flex-row gap-6 p-4 font-thin text-[1.4rem]">
		<div id="js-toc" class="js-toc w-[25%]" />
		<div class="js-toc-content w-[70%] flex flex-col gap-12">
			<div>
				<h2 id="1">Non-fiction</h2>
				<div class="chapter-container">
					<h3>Python</h3>
					<ul>
						<BookLink
							href={'https://cdn.discordapp.com/attachments/564877854517755904/564879806555226122/Black_Hat_Python_-_Python_Programming_for_Hackers_and_Pentesters.pdf'}
							name={'Black Hat Python'}
						/>

						<BookLink
							href={'https://cdn.discordapp.com/attachments/564877854517755904/564879808773750823/Python_-_HowTo_-_Regular_Expressions_20022.pdf'}
							name={'Python Regex HowTo'}
						/>

						<BookLink
							href={'https://cdn.discordapp.com/attachments/564877854517755904/564879820320800779/Python_-_Thinking_in_Python_-_Design_Patterns_and_Problem_Solving1.pdf'}
							name={'Python Thinking, Design Patterns and Problem Solving'}
						/>

						<BookLink
							href={'https://cdn.discordapp.com/attachments/564877854517755904/564879841745174539/OReilly_Python_for_Unix_and_Linux_System_Administration_-_Sep_20081.pdf'}
							name={'Black Hat Python'}
						/>

						<BookLink
							href={'https://cdn.discordapp.com/attachments/564877854517755904/564879864956583946/Learn_Python_the_Hard_Way_3rd_Edition.pdf'}
							name={'Black Hat Python'}
						/>

						<BookLink href={''} name={'Black Hat Python'} />

						<BookLink href={''} name={'Black Hat Python'} />

						<BookLink href={''} name={'Black Hat Python'} />
					</ul>
				</div>
			</div>

			<div>
				<h2 id="2">Programming, Hacking, & Cyber Security</h2>
			</div>
		</div>
	</div>
	<script>
		tocbot.init({
			// Where to render the table of contents.
			tocSelector: '.js-toc',
			contentSelector: '.js-toc-content',
			headingSelector: 'h2, h3',
			ignoreSelector: '.js-toc-ignore',
			hasInnerContainers: false,
			linkClass: 'toc-link',
			// the link corresponding to the top most heading on the page.
			activeLinkClass: 'is-active-link',
			// Main class to add to lists.
			listClass: 'toc-list',
			// Class that gets added when a list should be collapsed.
			isCollapsedClass: 'is-collapsed',
			// Class that gets added when a list should be able
			// to be collapsed but isn't necessarily collapsed.
			collapsibleClass: 'is-collapsible',
			// Class to add to list items.
			listItemClass: 'toc-list-item',
			// Class to add to active list items.
			activeListItemClass: 'is-active-li',
			// How many heading levels should not be collapsed.
			// For example, number 6 will show everything since
			// there are only 6 heading levels and number 0 will collapse them all.
			// The sections that are hidden will open
			// and close as you scroll to headings within them.
			collapseDepth: 0,
			// Smooth scrolling enabled.
			scrollSmooth: true,
			// Smooth scroll duration.
			scrollSmoothDuration: 420,
			// Smooth scroll offset.
			scrollSmoothOffset: 0,
			// Callback for scroll end.
			scrollEndCallback: function (e) {},
			// Headings offset between the headings and the top of the document (this is meant for minor adjustments).
			headingsOffset: 1,
			// Timeout between events firing to make sure it's
			// not too rapid (for performance reasons).
			throttleTimeout: 50,
			// Element to add the positionFixedClass to.
			positionFixedSelector: null,
			// Fixed position class to add to make sidebar fixed after scrolling
			// down past the fixedSidebarOffset.
			positionFixedClass: 'is-position-fixed',
			// fixedSidebarOffset can be any number but by default is set
			// to auto which sets the fixedSidebarOffset to the sidebar
			// element's offsetTop from the top of the document on init.
			fixedSidebarOffset: 'auto',
			// includeHtml can be set to true to include the HTML markup from the
			// heading node instead of just including the textContent.
			includeHtml: false,
			// includeTitleTags automatically sets the html title tag of the link
			// to match the title. This can be useful for SEO purposes or
			// when truncating titles.
			includeTitleTags: false,
			// onclick function to apply to all links in toc. will be called with
			// the event as the first parameter, and this can be used to stop,
			// propagation, prevent default or perform action
			onClick: function (e) {},
			// orderedList can be set to false to generate unordered lists (ul)
			// instead of ordered lists (ol)
			orderedList: true,
			// If there is a fixed article scroll container, set to calculate titles' offset
			scrollContainer: null,
			// prevent ToC DOM rendering if it's already rendered by an external system
			skipRendering: false,
			// Optional callback to change heading labels.
			// For example it can be used to cut down and put ellipses on multiline headings you deem too long.
			// Called each time a heading is parsed. Expects a string and returns the modified label to display.
			// Additionally, the attribute `data-heading-label` may be used on a heading to specify
			// a shorter string to be used in the TOC.
			// function (string) => string
			headingLabelCallback: false,
			// ignore headings that are hidden in DOM
			ignoreHiddenElements: false,
			// Optional callback to modify properties of parsed headings.
			// The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
			// Function has to return the same or modified obj.
			// The heading will be excluded from TOC if nothing is returned.
			// function (object, HTMLElement) => object | void
			headingObjectCallback: null,
			// Set the base path, useful if you use a `base` tag in `head`.
			basePath: '',
			// Only takes affect when `tocSelector` is scrolling,
			// keep the toc scroll position in sync with the content.
			disableTocScrollSync: false,
			// Offset for the toc scroll (top) position when scrolling the page.
			// Only effective if `disableTocScrollSync` is false.
			tocScrollOffset: 0
		});

		setInterval(() => {
			tocbot.refresh();
		}, 100);
	</script>
</section>

<style>
	h2 {
		font-weight: bold;
		margin-bottom: 10px;
		font-size: larger;
	}
	.chapter-container {
		padding-left: 2rem;
	}

	h3 {
		text-decoration: underline;
		margin-bottom: 10px;
	}
	ul.dashed {
		list-style-type: none;
	}
	ul.dashed > li {
		text-indent: -5px;
	}
	ul.dashed > li:before {
		content: '- ';
		margin-left: 20px;
		text-indent: -5px;
	}
</style>
