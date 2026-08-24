<script lang="ts">
  import { planets } from "$lib/plantes";
  import PlanetCard from "../components/PlanetCard.svelte";

  let mode = $state(false);
</script>

<section class={`space ${mode ? "light" : "dark"}`}>
  <button
    class={`mode-switch ${mode ? "light" : "dark"}`}
    onclick={() => (mode = !mode)}
  >
    <span>
      {mode ? "☀️" : "🌑"}
    </span>
  </button>
  <ul class="planet-wrapper">
    {#each planets as p}
      <PlanetCard
        planet={p}
        {mode}
        --planet-size={p.displaySize}
        // --planet-size={`${p.displaySize}px`}
        --planet-color={p.color}
      />
    {/each}
  </ul>
</section>

<style>
  ul,
  .space {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .space {
    position: relative;
  }
  .mode-switch {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 1rem;
    right: 1rem;

    border-radius: 50%;
    border: none;
    cursor: pointer;

    span {
      font-size: clamp(1.2rem, 1vw, 1.5rem);
      line-height: 1;
      top: 14px;
      right: 11px;
    }

    &.dark {
      background-color: rgb(56, 53, 96);
    }
    &.light {
      background-color: rgb(215, 212, 167);
    }
  }

  .light {
    background-color: rgb(229, 228, 207);
  }

  .dark {
    background-color: rgb(31, 29, 58);
  }

  .planet-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
</style>
