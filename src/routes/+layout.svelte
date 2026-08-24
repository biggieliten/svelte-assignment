<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../style/global.css";
  import ThemeSwitch from "../components/ThemeSwitch.svelte";
  import { theme } from "$lib/theme.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app" data-theme={theme.mode}>
  <ThemeSwitch />
  {@render children()}
</div>
