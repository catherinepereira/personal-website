export type Project = {
	title: string;
	dates?: string;
	company?: Company;

	description: string;
	link?: string;

	skillTags: SkillTag[];
	platformTags: PlatformTag[];

	images?: string;
};

export enum Company {
	EasyGames = "Easy Games",
}

export enum SkillTag {
	TypeScript = "TypeScript",
	JavaScript = "JavaScript",
	React = "React",
	Roact = "Roact",
	Swift = "Swift/SwiftUI",
	Lua = "Lua",
	Python = "Python",
}

export enum PlatformTag {
	Website = "Website",
	App = "App",
	Roblox = "Roblox",
	Unity = "Unity",
	ChromeExtension = "Chrome Extension",
}

export const projects: Project[] = [
	{
		title: "Piggy Bank",
		description:
			"A test project app written in Swift/SwiftUI that allows you to set budget goals, create transaction entries, and visualize progress toward those goals.",
		link: "",
		skillTags: [SkillTag.Swift],
		platformTags: [PlatformTag.App],
	},
	{
		title: "WebsiteBlocker",
		description:
			"A site blocker I made after being unable to find an existing extension that would allow me to block an unlimited number of websites and toggle blocking on and off at will.",
		link: "",
		skillTags: [SkillTag.JavaScript],
		platformTags: [PlatformTag.ChromeExtension],
	},
	{
		title: "Roblox BedWars",
		dates: "(2022 - Present)",
		company: Company.EasyGames,
		description:
			"Led development of the following playable in-game characters: Whim, Crypt, Elektra, Noelle, Marina, Arachne, and Void Knight. \n" +
			"This process begins with creating and presenting a kit concept. The concept can be solely mechanic-based, but I usually also include a few art references for the design. " +
			"The design is then finalized by our concept artist and modeled by one of our team’s modelers. I will then request other image, sound, and model assets from the team and work with each artist or sound designer to finalize these aspects. " +
			"At the same time, I code the mechanics for the kit, and test the kit with other developers on the team to gather feedback and polish the kit’s unique gameplay. \n\n" +
			"Other features I helped develop include: \n" +
			"- “BedWars Creative” in-game Lua scripting API and tools \n" +
			"- Team Upgrade system iterations \n" +
			"- Various items, mechanics, gamemodes, and events",
		skillTags: [SkillTag.TypeScript, SkillTag.Roact, SkillTag.Lua],
		platformTags: [PlatformTag.Roblox],
	},
	{
		title: "Roblox Islands",
		dates: "(2022)",
		company: Company.EasyGames,
		description:
			"Led development of the following in-game features: \n" +
			"- Slime Queen boss character and boss fight \n" +
			"- Fishing mini-game rework \n" +
			" - Various new items, tools, crops, and events",
		skillTags: [SkillTag.TypeScript, SkillTag.Roact],
		platformTags: [PlatformTag.Roblox],
	},
];
