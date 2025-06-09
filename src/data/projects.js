import PlaywiseImg from "../assets/Playwise.png";
import DevFinderImg from "../assets/DevFinder.png";
import JammmingImg from "../assets/Jammming.png";
import InteractiveWorldMapImg from "../assets/Interactive-World-Map.png";

export const projects = [
  {
    title: "Playwise",
    image: PlaywiseImg,
    description:
      "A web application that tracks video game deals across various platforms using the CheapShark API. Users can search for games, compare prices, and find the best deals available.",
    short:
      "Track and compare video game deals across platforms using CheapShark API.",
    stack: ["React", "Redux", "Vite", "Tailwind", "REST API"],
    github: "https://github.com/Abdulaziz-Abukar/playwise",
    live: "https://abdulaziz-abukar.github.io/playwise/",
  },
  {
    title: "DevFinder",
    image: DevFinderImg,
    description:
      "A sleek, themeable Github profile lookup app built with React and Vite. Easily search for any developer by their GitHub username and get essential information with a modern UI and smooth UX.",
    short: "Look up GitHub profiles with a modern, themeable interface.",
    stack: ["React", "Vite", "GitHub API", "CSS Modules"],
    github: "https://github.com/Abdulaziz-Abukar/devfinder",
    live: "https://abdulaziz-abukar.github.io/devfinder/",
  },
  {
    title: "Jammming",
    image: JammmingImg,
    description:
      "Jammming is a React + Spotify web application that allows users to search for music, create custom playlists, and save them directly to their Spotify accounts.",
    short: "Create and save Spotify playlists using a custom web app.",
    stack: ["React", "Vite", "Spotify API"],
    github: "https://github.com/Abdulaziz-Abukar/jammming",
    live: "https://abdulaziz-abukar.github.io/jammming/",
  },
  {
    title: "Interactive World Map",
    image: InteractiveWorldMapImg,
    description:
      "An interactive map application that allows users to view data about any country. Built with Angular, it provides an engaging way to explore global information.",
    short: "Explore country data through an interactive Angular-based map.",
    stack: ["Angular", "SVG"],
    github: "https://github.com/Abdulaziz-Abukar/Interactive-World-Map",
    live: "https://abdulaziz-abukar.github.io/Interactive-World-Map/",
  },
  // {
  //   title: "Vacation Planner",
  //   image: "#",
  //   description:
  //     "The Vacation Planner is an android application designed to help users organize and manage vacations efficiently. it allows users to create vacation plans add accomodations, and schedule excursions, ensuring a well-structured iternity.",
  //   stack: ["Android", "Java"],
  //   github: "https://github.com/Abdulaziz-Abukar/Vacation-Planner",
  // },
  // {
  //   title: "Chek - Productivity App",
  //   image: "#",
  //   description:
  //     "Chek is an IOS productivity app that helps users maximize their productivity with advanced progress tracking and customizable designs to suit their style.",
  //   platform: "IOS",
  // },
];
