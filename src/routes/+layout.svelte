<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);


	
</script>

<!-- App Shell -->
<AppShell>
	<AppBar>
		<h3>Snippet Savooorrr</h3>
	</AppBar>
	<slot />
</AppShell>
