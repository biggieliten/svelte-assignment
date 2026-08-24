export const planets: Planet[] = [
  {
    slug: "mercury",
    name: "Mercury",
    hasRing: false,
    type: "Terrestrial planet",
    description: "The smallest planet and the closest planet to the Sun.",
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
    hasRing: false,
    type: "Terrestrial planet",
    description: "The hottest planet, with a thick carbon dioxide atmosphere.",
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
    hasRing: false,
    type: "Terrestrial planet",
    description: "Our home planet and the only known planet with life.",
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
    hasRing: false,
    type: "Terrestrial planet",
    description: "A cold, rocky planet known for its reddish surface.",
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
    hasRing: false,
    type: "Gas giant",
    description: "The largest planet, famous for its Great Red Spot.",
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
    hasRing: true,
    type: "Gas giant",
    description: "A gas giant best known for its spectacular rings.",
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
    hasRing: false,
    type: "Ice giant",
    description: "An ice giant that rotates on its side.",
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
    hasRing: false,
    type: "Ice giant",
    description:
      "The farthest planet from the Sun, with extremely strong winds.",
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
