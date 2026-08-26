<script lang="ts">
  import type { PlanetOptionsType } from "$lib/planets";

  let {
    legend,
    options,
    selected = $bindable("all"),
  }: {
    legend: string;
    options: PlanetOptionsType[];
    selected?: string;
  } = $props();
</script>

<fieldset class="planet-filter">
  <legend>{legend}</legend>

  <label>
    All
    <input type="radio" name="planet-type" value="all" bind:group={selected} />
  </label>

  {#each options as option}
    <label for={option.type}
      >{option.label}

      <input
        id={option.type}
        type="radio"
        name="planet-type"
        value={option.type}
        bind:group={selected}
      />
    </label>
  {/each}
</fieldset>

<style>
  .planet-filter {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: var(--secondary);
    border: none;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5px;
    gap: 0.4rem;
    box-sizing: border-box;
  }

  legend {
    font-weight: bold;
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0.2rem;
    transition: background-color 200ms ease;
  }

  label:hover {
    background-color: rgba(255, 255, 255, 0.253);
  }

  input {
    accent-color: var(--button-color);
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    .planet-filter {
      top: 4.5rem;
      left: 50%;
      width: 90%;
      transform: translateX(-50%);
    }
  }
</style>
