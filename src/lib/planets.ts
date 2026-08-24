import jupiterImage from "$lib/assets/jupiter.png";
import marsImage from "$lib/assets/mars.jpg";
import mercuryImage from "$lib/assets/mercury.jpg";
import neptuneImage from "$lib/assets/neptune.jpg";
import saturnImage from "$lib/assets/saturn.jpg";
import uranusImage from "$lib/assets/uranus.png";
import venusImage from "$lib/assets/venus.png";

export const planets: Planet[] = [
  {
    slug: "mercury",
    name: "Mercury",
    image: mercuryImage,
    hasRing: false,
    type: "Terrestrial planet",
    description:
      "Mercury is the smallest planet and the closest to the Sun. Its rocky surface is covered with craters, and it experiences extreme temperature changes between day and night because it has almost no atmosphere.",
    diameter: 4879,
    temperatureMin: -180,
    temperatureMax: 430,
    moons: 0,
    displaySize: 40,
    color: "#9b9b9b",
    textColor: "#111111",
  },
  {
    slug: "venus",
    name: "Venus",
    image: venusImage,
    hasRing: false,
    type: "Terrestrial planet",
    description:
      "Venus is the hottest planet in the Solar System. Its thick carbon dioxide atmosphere traps heat in a powerful greenhouse effect, while clouds of sulfuric acid surround its rocky surface.",
    diameter: 12104,
    temperatureMin: 462,
    temperatureMax: 465,
    moons: 0,
    displaySize: 53,
    color: "#d8b78a",
    textColor: "#111111",
  },
  {
    slug: "earth",
    name: "Earth",
    image:
      "https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?resize=400,225",
    hasRing: false,
    type: "Terrestrial planet",
    description:
      "Earth is the only known planet with life. It has abundant liquid water, a nitrogen-rich atmosphere, and a protective magnetic field. Its active geology continually reshapes the surface.",
    diameter: 12742,
    temperatureMin: -89,
    temperatureMax: 57,
    moons: 1,
    displaySize: 70,
    color: "#3f6edb",
    textColor: "#ffffff",
  },
  {
    slug: "mars",
    name: "Mars",
    image: marsImage,
    hasRing: false,
    type: "Terrestrial planet",
    description:
      "Mars is a cold, rocky world known for its reddish surface, which gets its color from iron minerals in the soil. It has polar ice caps, enormous volcanoes, deep canyons, and evidence that liquid water once flowed across its surface.",
    diameter: 6779,
    temperatureMin: -125,
    temperatureMax: 20,
    moons: 2,
    displaySize: 52,
    color: "#b86a4b",
    textColor: "#ffffff",
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    image: jupiterImage,
    hasRing: false,
    type: "Gas giant",
    description:
      "Jupiter is the largest planet and a massive gas giant made mostly of hydrogen and helium. Its turbulent atmosphere contains colorful cloud bands and the Great Red Spot, a storm that has lasted for centuries.",
    diameter: 139820,
    temperatureMin: -145,
    temperatureMax: -110,
    moons: 95,
    displaySize: 180,
    color: "#c8a06f",
    textColor: "#111111",
  },
  {
    slug: "saturn",
    name: "Saturn",
    image: saturnImage,
    hasRing: true,
    type: "Gas giant",
    description:
      "Saturn is a gas giant best known for its spectacular system of icy rings. It is mostly composed of hydrogen and helium and has a low density, while its atmosphere contains fast winds and long-lasting storms.",
    diameter: 116460,
    temperatureMin: -178,
    temperatureMax: -130,
    moons: 146,
    displaySize: 124,
    color: "#d7c18a",
    textColor: "#111111",
  },
  {
    slug: "uranus",
    name: "Uranus",
    image: uranusImage,
    hasRing: false,
    type: "Ice giant",
    description:
      "Uranus is a pale blue ice giant containing water, methane, and ammonia beneath its atmosphere. Its unusual tilt causes it to rotate almost on its side, creating extreme seasonal changes as it orbits the Sun.",
    diameter: 50724,
    temperatureMin: -224,
    temperatureMax: -195,
    moons: 28,
    displaySize: 90,
    color: "#8fc9d1",
    textColor: "#111111",
  },
  {
    slug: "neptune",
    name: "Neptune",
    image: neptuneImage,
    hasRing: false,
    type: "Ice giant",
    description:
      "Neptune is the farthest recognized planet from the Sun. This deep-blue ice giant has the fastest winds in the Solar System, powerful storms, and a faint ring system made of dark dust and ice particles.",
    diameter: 49244,
    temperatureMin: -218,
    temperatureMax: -200,
    moons: 16,
    displaySize: 80,
    color: "#4b73d1",
    textColor: "#ffffff",
  },
];

export type Planet = {
  slug: string;
  name: string;
  image: string;
  hasRing: boolean;
  type: string;
  description: string;
  diameter: number;
  temperatureMin: number;
  temperatureMax: number;
  moons: number;
  displaySize: number;
  color: string;
  textColor: string;
};
