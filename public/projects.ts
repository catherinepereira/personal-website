export type Project = {
  title: string;
  dates?: string;
  company?: Company;

  description: string[];
  link?: string;

  skillTags: SkillTag[];

  images?: string;
};

export enum Company {
  EasyGames = "Easy Games",
}

export enum SkillTag {
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",

  Lua = "Lua",
  Swift = "Swift/SwiftUI",

  Svelte = "Svelte",
  React = "React",
  Roact = "Roact",
  NextJS = "Next.js",
  NestJS = "Nest.js",

  Docker = "Docker",
  Prisma = "Prisma",
  SQLDatabase = "SQL Databases",
  GoogleCloud = "Google Cloud Platform",

  RobloxEngine = "Roblox Engine",
  UnityEngine = "Unity Engine",
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: [
      "My personal website for sharing my personal and work projects. You're here!",
    ],
    link: "https://github.com/catherinepereira/personal-website",
    skillTags: [SkillTag.React, SkillTag.TypeScript, SkillTag.NextJS],
  },
  {
    title: "Airship Tracker",
    description: [
      "Website to track live player count statistics from the Unity multiplayer game platform Airship.",
    ],
    link: "https://airship.top",
    skillTags: [
      SkillTag.React,
      SkillTag.TypeScript,
      SkillTag.NestJS,
      SkillTag.Docker,
      SkillTag.Prisma,
      SkillTag.SQLDatabase,
    ],
  },
  {
    title: "Airship",
    dates: "(2025 - Present)",
    link: "https://airship.gg",
    company: Company.EasyGames,
    description: [
      "Platform development for the Unity multiplayer game platform Airship.",
    ],
    skillTags: [
      SkillTag.Svelte,
      SkillTag.TypeScript,
      SkillTag.NestJS,
      SkillTag.Docker,
      SkillTag.Prisma,
      SkillTag.SQLDatabase,
      SkillTag.GoogleCloud,
    ],
  },
  {
    title: "Roblox BedWars",
    dates: "(2022 - 2025)",
    link: "https://bedwars.com",
    company: Company.EasyGames,
    description: [
      "Led development of the following playable in-game characters: Whim, Crypt, Elektra, Noelle, Marina, Arachne, Void Knight, Nahla, Isabel, Ragnar, and Marcel.",
      "Some of the other features I've worked on:",
      "- Reconnect to match",
      "- Asynchronous performance finalization",
      "- “BedWars Creative” in-game Lua scripting API and tools",
      "- Tournament team creation, assignment, and scheduling of events",
      "- Team Upgrade mechanic iterations",
    ],
    skillTags: [
      SkillTag.TypeScript,
      SkillTag.Roact,
      SkillTag.Lua,
      SkillTag.RobloxEngine,
    ],
  },
  {
    title: "Roblox Islands",
    dates: "(2022)",
    link: "https://www.roblox.com/games/4872321990/",
    company: Company.EasyGames,
    description: [
      "Led development of the following in-game features:",
      "- Slime Queen boss character and boss fight",
      "- Fishing mini-game rework",
      " - Various new items, tools, crops, and events",
    ],
    skillTags: [SkillTag.TypeScript, SkillTag.Roact, SkillTag.RobloxEngine],
  },
  {
    title: "WebsiteBlocker",
    description: [
      "A site blocker I made after being unable to find an existing extension that would allow me to block an unlimited number of websites and toggle blocking on and off at will.",
    ],
    link: "https://github.com/catherinepereira/WebsiteBlocker",
    skillTags: [SkillTag.JavaScript],
  },
  {
    title: "Piggy Bank",
    description: [
      "An app written in Swift/SwiftUI that allows you to set budget goals, create transaction entries, and visualize progress toward those goals.",
    ],
    link: "https://github.com/catherinepereira/PiggyBank",
    skillTags: [SkillTag.Swift],
  },
];
