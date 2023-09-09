<script>
	import BookLink from './BookLink.svelte';
	import BookLinkList from './BookLinkList.svelte';
	import DownArrow from './DownArrow.svelte';
	let closed = [false];

	function closedCheck(chapter) {
		if (closed[chapter]) {
			closed[chapter] = false;
		} else {
			closed[chapter] = true;
		}
	}
</script>

<!-- 
	author: marquisTheCoder
	date: 2023 September 09
	description: site that allows 
	accessibilty of knowledge to more
	researchers and students
 -->
<section id="content" class="h-[40rem] w-screend px-6 md:px-32 mt-24">
	<div
		class="library h-[10rem] w-screen flex flex-col md:flex-row gap-6 p-4 font-thin text-[1.4rem] relative"
	>
		<div id="js-toc" class="js-toc md:w-[25%] sticky top-0 left-0 flex flex-row bg-white" />

		<div class="js-toc-content md:w-[70%] flex flex-col itemse-center md:items-start gap-6">
			<div>
				<h2 id="programming">Programming, Hacking, and Cyber Security</h2>

				<div class="chapter-container overflow-hidden w-full">
					<div class="flex flex-row gap-3 items-center">
						<h3 id="python">Python</h3>
						<DownArrow on:click={() => closedCheck(0)} />
					</div>
					<div class:closed={closed[0]} class="transition-all ease-in-out delay-150">
						<BookLinkList classes={'closed'}>
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
								name={'Python for Unix and Linux System Administration'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/564877854517755904/564879864956583946/Learn_Python_the_Hard_Way_3rd_Edition.pdf'}
								name={'Learn Python the Hard Way 3rd Edition'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/564877854517755904/564879872879624192/Learning_Selenium_Testing_Tools_with_Python_-_Gundecha_Unmesh.pdf'}
								name={'Learning Selenium Tools With Python'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/564877854517755904/564879882757210172/Python_Essential_Reference_2Nd_Edition1.pdf'}
								name={'Python Essential Reference'}
							/>
						</BookLinkList>
					</div>
				</div>
				<div class="chapter-container w-full overflow-hidden">
					<div class="flex flex-row gap-3 items-center">
						<h3 id="cybersecurity">Cybersecurity</h3>
						<DownArrow on:click={() => closedCheck(1)} />
					</div>
					<div class:closed={closed[1]} class="transition-all ease-in-out delay-150">
						<BookLinkList classes={'closed is-collapsed'}>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/797077977719635968/SQL_Injection_Strategies.pdf'}
								name={'SQL Injection Strategies'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/797078027733303306/Cybersecurity_Blue_Team_Toolkit.pdf'}
								name={'Cybersecurity Blue Team Toolkit'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/797078056896430111/Digital_Forensics_with_Kali_Linux_2nd_Edition1.pdf'}
								name={'Digital Forensics with Kali Linux'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/797077975664689152/Testing_and_securing_web_applications.pdf'}
								name={'Testing and Securing Web Applications'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/797078874654769152/Web_Security_for_Developers.epub'}
								name={'Web Security for Developers'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/988633235120599050/Remote_Car_Hacking.pdf'}
								name={'Remote Car Hacking'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/988634143220961290/5G-Mobile-and-Wireless-Communications-Technology.pdf'}
								name={'5G Mobile and Wireless Communication Technology'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894642903187466/Nmap_cookbook-the-fat-free-guide-to-network-scanning.pdf'}
								name={'Nmap Cookbook The Fat Free Guide To Network Scanning'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894642357796865/Jolly_Roger_s_Security_Thread_for_Beginners.pdf'}
								name={"Jolly Roger' Security Thread for Beginners"}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894635898568743/Web_App_Hacking_Hackers_Handbook.pdf'}
								name={'Web App Hacking Hackers Handbook'}
							/>

							<!-- ------------------ -->
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894628961320983/Gray_Hat_Hacking_-_The_Ethical_Hackers_Handbook_-_4th_Edition_2015.pdf'}
								name={'Gray Hacking Hackers Handbook'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894617074663439/Hacking_Exposed_-_Network_Security_Secrets_and_Solutions_Third_Edition.pdf'}
								name={'Hacking Exposed Network Security Secrets'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894592940376282/Offensive_Security_Lab_Exercises_v.2.0_-_OS-2402.pdf'}
								name={'Offensive Security Lab'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894590016946176/The_Complete_Guide_to_Shodan_-_John_Matherly1.pdf'}
								name={'The Complete Guide to Shodan'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894533599494172/The_HAMMER_Filesystem.pdf'}
								name={'The Hammer Filesystem'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894528356745263/Kali_Linux-_Assuring_Security_by_Penetration_Testing_-_Allen_Lee.pdf'}
								name={'Kali Linux Assuring Security By Penetration Testing'}
							/>
							<!--  -->

							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894505388736512/TEMPORA_-_The_Worlds_Largest_XKEYSCORE_is_Now_Avaiable_to_Qualified_NSA_Users.pdf'}
								name={'Tempora Worlds Largest XKEYSCORE'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894504742551577/Security_Culture_-_A_Handbook_for_Activists.pdf'}
								name={'Security Culture'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894495418875914/John_Waldron-Introduction_to_RISC_Assembly_Language_Programming-Addison-Wesley_1998.pdf'}
								name={'Introduction to RISC Assembly'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894493707337757/Deep_Web_Research_and_Resource_Discovery_2017.pdf'}
								name={'Deep Web Research and Resource Discovery'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894492763750400/NetBIOS_Hacking_-_How_to_hack_into_a_computer_on_LAN-WAN.pdf'}
								name={'NetBIOS Hacking'}
							/>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/564880473965330432/564894488598806538/Kali_Linux_Network_Scanning_Cookbook_-_Hutchens_Justin.pdf'}
								name={'Kali Linux Network Scanning'}
							/>
						</BookLinkList>
					</div>
				</div>
				<div class="chapter-container overflow-hidden w-full">
					<div class="flex flex-row gap-3 items-center">
						<h3 id="javascript">Javascript</h3>
						<DownArrow on:click={() => closedCheck(2)} />
					</div>
					<div class:closed={closed[2]} class="transition-all ease-in-out delay-150">
						<BookLinkList classes={'closed'}>
							<BookLink
								href={'https://cdn.discordapp.com/attachments/597877450529046537/597879965278797855/OReilly_-_JavaScript_Application_Cookbook.pdf'}
								name={'Javascript Application Cookbook'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/597877450529046537/597879964552921150/OReilly_-_JavaScript_The_Good_Parts.chm'}
								name={'JavaScript The Good Parts'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/597877450529046537/597879963940683807/OReilly_-_Learning_JavaScript-1.chm'}
								name={'Learning Javascript'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/597877450529046537/597877661548806166/OReilly_-_JavaScript_Pocket_Reference_2nd_Edition.chm'}
								name={'JavaScript Pocket Reference'}
							/>

							<BookLink
								href={'https://cdn.discordapp.com/attachments/597877450529046537/597878734732918806/OReilly_-_JavaScript_and_DHTML_Cookbook-1.chm'}
								name={'JavaScript and DHTML Cookbook'}
							/>
						</BookLinkList>
					</div>
				</div>
			</div>

			<!-- <div>
				<h2 id="non-fiction">Non-fiction</h2>
			</div> -->
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
		margin-top: 4rem;
	}

	h3 {
		text-decoration: underline;
		margin-bottom: 10px;
	}

	.closed {
		height: 0;
	}
</style>
