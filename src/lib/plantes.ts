export const planets: Planet[] = [
  {
    slug: "mercury",
    name: "Mercury",
    type: "Terrestrial planet",
    description: "The smallest planet and the closest planet to the Sun.",
    diameter: 4879,
    temperatureMin: -180,
    temperatureMax: 430,
    moons: 0,
  },
  {
    slug: "venus",
    name: "Venus",
    type: "Terrestrial planet",
    description: "The hottest planet, with a thick carbon dioxide atmosphere.",
    diameter: 12104,
    temperatureMin: 462,
    temperatureMax: 465,
    moons: 0,
  },
  {
    slug: "earth",
    name: "Earth",
    type: "Terrestrial planet",
    description: "Our home planet and the only known planet with life.",
    diameter: 12742,
    temperatureMin: -89,
    temperatureMax: 57,
    moons: 1,
  },
  {
    slug: "mars",
    name: "Mars",
    type: "Terrestrial planet",
    description: "A cold, rocky planet known for its reddish surface.",
    diameter: 6779,
    temperatureMin: -125,
    temperatureMax: 20,
    moons: 2,
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    type: "Gas giant",
    description: "The largest planet, famous for its Great Red Spot.",
    diameter: 139820,
    temperatureMin: -145,
    temperatureMax: -110,
    moons: 95,
  },
  {
    slug: "saturn",
    name: "Saturn",
    type: "Gas giant",
    description: "A gas giant best known for its spectacular rings.",
    diameter: 116460,
    temperatureMin: -178,
    temperatureMax: -130,
    moons: 146,
  },
  {
    slug: "uranus",
    name: "Uranus",
    type: "Ice giant",
    description: "An ice giant that rotates on its side.",
    diameter: 50724,
    temperatureMin: -224,
    temperatureMax: -195,
    moons: 28,
  },
  {
    slug: "neptune",
    name: "Neptune",
    type: "Ice giant",
    description:
      "The farthest planet from the Sun, with extremely strong winds.",
    diameter: 49244,
    temperatureMin: -218,
    temperatureMax: -200,
    moons: 16,
  },
];

export type Planet = {
  slug: string;
  name: string;
  type: string;
  description: string;
  diameter: number;
  temperatureMin: number;
  temperatureMax: number;
  moons: number;
};
