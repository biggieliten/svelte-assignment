<script lang="ts">
  import { planets } from "$lib/planets";
  import PlanetCard from "../components/PlanetCard.svelte";
  import { theme } from "$lib/theme.svelte";
</script>

<section class={`space ${theme.mode}`}>
  <ul class="planet-wrapper">
    {#each planets as p}
      <PlanetCard
        planet={p}
        --planet-size={p.displaySize}
        --planet-color={p.color}
      />
    {/each}
  </ul>
</section>

<style>
  ul,
  .space {
    display: flex;
    width: 100%;
  }

  .space {
    flex: 1;
    position: relative;
  }

  .planet-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0 0.5rem;
  }
  @media (max-width: 600px) {
    .planet-wrapper {
      gap: 0.7rem;
    }
  }
</style>
