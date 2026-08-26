<script lang="ts">
  import { planets } from "$lib/planets";
  import { planetOptions } from "$lib/planets";
  import PlanetCard from "../components/PlanetCard.svelte";
  import { theme } from "$lib/theme.svelte";
  import PlanetTypeFilter from "../components/PlanetTypeFilter.svelte";

  let selected = $state("all");

  const filteredPlanets = $derived(
    selected === "all"
      ? planets
      : planets.filter((planet) =>
          planet.type.toLowerCase().includes(selected),
        ),
  );
</script>

<section class={`space ${theme.mode}`}>
  <PlanetTypeFilter
    options={planetOptions}
    legend="Filter planet type:"
    bind:selected
  />
  <ul class="planet-wrapper">
    {#each filteredPlanets as p}
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
