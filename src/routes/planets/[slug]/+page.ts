import type { PageLoad } from "./$types";
import { planets } from "$lib/planets";
import { error } from "@sveltejs/kit";

export const load: PageLoad = ({ params }) => {
  const planet = planets.find((p) => p.slug === params.slug);

  if (!planet) error(404, "Planet not found");

  return { planet };
};
