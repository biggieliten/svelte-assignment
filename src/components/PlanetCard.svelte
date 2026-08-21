<script lang="ts">
  import type { Planet } from "$lib/plantes";

  let { planet }: { planet: Planet } = $props();
</script>

<li class="planet"><a href={`/planets/${planet.slug}`}>{planet.name}</a></li>

<style>
  a {
    text-decoration: none;
  }

  .planet {
    list-style: none;

    border: 1px solid black;
    border-radius: 50%;
  }
</style>
