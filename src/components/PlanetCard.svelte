<script lang="ts">
  import type { Planet } from "$lib/planets";

  let { planet }: { planet: Planet } = $props();
</script>

<li class="planet {planet.slug}" class:has-ring={planet.hasRing}>
  <a href={`/planets/${planet.slug}`}
    ><span class="planet-name">{planet.name}</span></a
  >
</li>

<style>
  a {
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .planet {
    position: relative;
    list-style: none;
    border-radius: 50%;
    width: calc(var(--planet-size) * clamp(0.5px, 0.1vw, 2.5px));
    display: flex;
    aspect-ratio: 1;
    background-color: var(--planet-color);
    transition: transform 500ms ease;
  }

  .planet-name {
    color: var(--text);
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    margin-bottom: 0.7rem;
    font-size: clamp(1rem, 1.2vw, 1.4rem);
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, 0.75rem);
    transition:
      opacity 200ms ease,
      transform 200ms ease,
      visibility 0s linear 200ms;
  }

  .planet:hover .planet-name,
  .planet:focus-within .planet-name {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
    transition-delay: 0s;
  }
  .planet:hover {
    transform: scale(1.1);
    box-shadow: var(--planet-glow) 0 0 200px 0;
  }

  .planet.has-ring::before {
    content: "";
    border-radius: 100%;
    position: absolute;
    top: 47%;
    left: -16%;
    width: 130%;
    height: clamp(0.1rem, 0.5vw, 0.344rem);
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(-30deg);
  }
</style>
