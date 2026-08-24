import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = ({ params }) => {};

function getRandomWindowPosition() {
  return {
    x: Math.floor(Math.random()),
  };
}
