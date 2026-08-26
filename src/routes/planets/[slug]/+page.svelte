<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const planet = $derived(data.planet);
</script>

<section class="details-wrapper">
  <a class="back-link" href="/">← Back to planets</a>

  <img src={planet.image} alt={planet.name} />

  <div class="planet-info">
    <p class="planet-type">{planet.type}</p>
    <h1>{planet.name}</h1>
    <p class="description">{planet.description}</p>

    <div class="facts">
      <p><strong>Diameter:</strong> {planet.diameter} km</p>
      <p><strong>Moons:</strong> {planet.moons}</p>
      <p>
        <strong>Temperature:</strong>
        {planet.temperatureMin}°C to
        {planet.temperatureMax}°C
      </p>
    </div>
  </div>
</section>

<style>
  .details-wrapper {
    width: min(90%, 900px);
    margin: 0 auto;
    padding: 3rem 0;
    color: var(--text);
  }

  .back-link {
    display: inline-block;
    margin-bottom: 2rem;
    color: var(--text);
    text-decoration: none;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  img {
    display: block;
    width: min(100%, 500px);
    height: 300px;
    margin: 0 auto 2rem;
    border-radius: 1rem;
    object-fit: cover;
  }

  .planet-info {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
  }

  .planet-type {
    margin-bottom: 0.5rem;
    color: var(--planet-glow);
    font-weight: bold;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  .description {
    line-height: 1.6;
  }

  .facts {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .facts p {
    padding: 0.75rem;
    background: var(--button-color);
    border-radius: 0.5rem;
  }

  @media (max-width: 600px) {
    .details-wrapper {
      padding: 2rem 0;
    }

    img {
      height: 220px;
    }

    h1 {
      font-size: 2.25rem;
    }
  }
</style>
