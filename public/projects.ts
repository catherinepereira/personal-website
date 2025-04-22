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
	HTMLCSS = "HTML/CSS",
	Python = "Python",
	Swift = "Swift/SwiftUI",

	React = "React",
	Roact = "Roact",
	NextJS = "Next.js",

	RobloxEngine = "Roblox Engine",
	UnityEngine = "Unity Engine",
}

export const projects: Project[] = [
	{
		title: "Portfolio Website",
		description: [
			"My personal website for sharing my personal and work projects. You're here!",
		],
		link: "https://catherinepereira.com", // Replace with link to open source repo
		skillTags: [
			SkillTag.React,
			SkillTag.JavaScript,
			SkillTag.HTMLCSS,
			SkillTag.NextJS,
		],
	},
	{
		title: "Roblox BedWars",
		dates: "(2022 - Present)",
		link: "https://bedwars.com",
		company: Company.EasyGames,
		description: [
			"Led development of the following playable in-game characters: Whim, Crypt, Elektra, Noelle, Marina, Arachne, Void Knight, and Nahla.",
			"Some of the other features I've worked on:",
			"- “BedWars Creative” in-game Lua scripting API and tools",
			"- Tournament system (team creation, assignment, and scheduling of events)",
			"- Team Upgrade system iterations",
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
		link: "",
		skillTags: [SkillTag.JavaScript, SkillTag.HTMLCSS],
	},
	{
		title: "Piggy Bank",
		description: [
			"An app written in Swift/SwiftUI that allows you to set budget goals, create transaction entries, and visualize progress toward those goals.",
		],
		link: "",
		skillTags: [SkillTag.Swift],
	},
];
