<script lang="ts">
  import { theme, toggleTheme } from "$lib/theme.svelte";
</script>

<button class={`mode-switch ${theme.mode}`} onclick={toggleTheme}>
  <span>
    {theme.mode === "light" ? "☀️" : "🌑"}
  </span>
</button>

<style>
  .mode-switch {
    background-color: var(--button-color);
    position: absolute;
    z-index: 1111;
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
  }

  @media (min-width: 3000px) {
    .mode-switch {
      width: 3.5rem;
      height: 3.5rem;
    }

    .mode-switch span {
      font-size: 2rem;
    }
  }
</style>
