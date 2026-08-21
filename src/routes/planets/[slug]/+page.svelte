<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

<h1>{data.planet.name}</h1>
<p>Test</p>
