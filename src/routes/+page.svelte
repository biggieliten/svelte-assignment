<script lang="ts">
  import { planets } from "$lib/plantes";
  import PlanetCard from "../components/PlanetCard.svelte";
</script>

<section>
  <ul class="planet-wrapper">
    {#each planets as p}
      <PlanetCard planet={p} />
    {/each}
  </ul>
</section>

<style>
  ul,
  section {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .planet-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
