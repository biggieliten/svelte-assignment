type Theme = "dark" | "light";

export let theme = $state({ mode: "dark" as Theme });

export function toggleTheme() {
  theme.mode = theme.mode === "dark" ? "light" : "dark";
}
