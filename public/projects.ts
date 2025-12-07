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

  Svelte = "Svelte",
  React = "React",
  Roact = "Roact",
  NextJS = "Next.js",
  NestJS = "Nest.js",

  Docker = "Docker",
  Prisma = "Prisma",
  SQLDatabase = "SQL",
  GoogleCloud = "Google Cloud Platform",

  RobloxEngine = "Roblox Engine",
  UnityEngine = "Unity Engine",
}

export const projects: Project[] = [
  {
    title: "Airship",
    dates: "(2025 - Present)",
    link: "https://airship.gg",
    company: Company.EasyGames,
    description: [
      "Contributing to platform development through various features, such as:",
      "▸ Firebase account linking and third-party Steam account linking",
      "▸ Playtime tracking and top game playtime reward systems",
      "▸ Website-based view and edit feature of in-game leaderboards",
      "▸ Moderation tooling",
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
    title: "airship.top",
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
    title: "Roblox BedWars",
    dates: "(2022 - 2025)",
    link: "https://bedwars.com",
    company: Company.EasyGames,
    description: [
      "▸ Led technical development of over 10 playable in-game characters", // Whim, Crypt, Elektra, Noelle, Marina, Arachne, Void Knight, Nahla, Isabel, Ragnar, and Marcel :P
      "▸ Contributed to a weekly content update schedule for over 3 years",
      "▸ Added match reconnect support",
      "▸ Added asynchronous match performance finalization support",
      "▸ Worked on “BedWars Creative” in-game Lua scripting API and tooling",
      "▸ Worked on in-game tournament team creation, assignment, and scheduling of events",
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
      "▸ Contributed to a weekly content update schedule",
      "▸ Led technical development of boss fights and interactable characters",
      "▸ Added various mini-games, events, and quests",
    ],
    skillTags: [SkillTag.TypeScript, SkillTag.Roact, SkillTag.RobloxEngine],
  },
  {
    title: "cat5.dev",
    description: [
      "My personal website for sharing my personal and work projects. You're here!",
    ],
    link: "https://github.com/catherinepereira/personal-website",
    skillTags: [SkillTag.React, SkillTag.TypeScript, SkillTag.NextJS],
  },
  {
    title: "Website Blocker",
    description: [
      "A site blocker I made after being unable to find an existing extension that would allow me to block an unlimited number of websites and toggle blocking on and off at will.",
    ],
    link: "https://github.com/catherinepereira/WebsiteBlocker",
    skillTags: [SkillTag.JavaScript],
  },
];
