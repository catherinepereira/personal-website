"use client";
import { useState } from "react";
import { projects, SkillTag } from "../../public/projects";
import ProjectCard from "../components/ProjectCard";

const skillTags = Object.values(SkillTag);

export default function Home() {
  const [selectedSkills, setSelectedSkill] = useState<Set<SkillTag>>(new Set());

  const filteredProjects = projects.filter((project) => {
    if (selectedSkills.size === 0) return true;
    return selectedSkills.isSubsetOf(new Set(project.skillTags));
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-950 to-black"
      >
        {/* Geometric accent lines */}
        <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-mercedesTeal/50 to-transparent"></div>
        <div className="absolute top-32 right-0 w-1/3 h-px bg-gradient-to-l from-mercedesTeal/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Info */}
            <div>
              <div className="inline-block mb-4">
                <div className="h-px w-12 bg-mercedesTeal mb-4"></div>
                <p className="text-sm font-medium text-mercedesTeal uppercase tracking-widest">
                  Software Engineer
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Cat Pereira
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Building the Unity multiplayer platform{" "}
                <a
                  href="https://airship.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercedesTeal hover:text-white transition-colors border-b border-mercedesTeal/50"
                >
                  Airship
                </a>{" "}
                at{" "}
                <a
                  href="https://easy.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercedesTeal hover:text-white transition-colors border-b border-mercedesTeal/50"
                >
                  Easy Games
                </a>
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                <a
                  href="https://github.com/catherinepereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mercedesTeal transition-colors"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://kaggle.com/catherinepereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mercedesTeal transition-colors"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/catpereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mercedesTeal transition-colors"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </a>
                <a
                  href="mailto:catpereiradev@gmail.com"
                  className="text-gray-400 hover:text-mercedesTeal transition-colors"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 border-l-2 border-t-2 border-mercedesTeal/20"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="../profile.jpg"
                className="relative w-full max-w-md mx-auto aspect-square object-cover"
                alt="Cat Pereira"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-r-2 border-b-2 border-mercedesTeal/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="h-px w-12 bg-mercedesTeal mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                From a start in game community management, to developing Roblox
                games enjoyed by millions of players, and now working on
                platform development, I bring a vast array of knowledge from
                every perspective of the game development world, and endless
                dedication to learning new skills.
              </p>
              <p>
                I&apos;m currently working on{" "}
                <a
                  href="https://airship.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercedesTeal hover:text-white transition-colors border-b border-mercedesTeal/50"
                >
                  Airship
                </a>{" "}
                at{" "}
                <a
                  href="https://easy.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercedesTeal hover:text-white transition-colors border-b border-mercedesTeal/50"
                >
                  Easy Games
                </a>
                , specializing in full-stack development with expertise in
                modern web technologies and game engines.
              </p>
              <p>
                In addition, I&apos;m actively working to further my skills in
                machine learning applications, drawing on my experience with
                game development business problems as well as my years spent
                studying Statistics in university.
              </p>
              <p>
                My pastimes include: watching Formula 1 races at absurd hours,
                experimenting with new ways to make coffee, and riding
                motorcycles!
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-mercedesTeal uppercase tracking-widest mb-3">
                  Frontend
                </h3>
                <p className="text-gray-400">
                  React, Next.js, Svelte, TypeScript
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-mercedesTeal uppercase tracking-widest mb-3">
                  Backend
                </h3>
                <p className="text-gray-400">
                  NestJS, Docker, Prisma, SQL, GCP
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-mercedesTeal uppercase tracking-widest mb-3">
                  Game Dev
                </h3>
                <p className="text-gray-400">Roblox, Unity, Lua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 bg-gradient-to-b from-gray-950 to-black border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="h-px w-12 bg-mercedesTeal mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Portfolio
            </h2>

            {/* Skill Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSkill(new Set())}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all ${
                  selectedSkills.size === 0
                    ? "bg-mercedesTeal text-black"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                }`}
              >
                All
              </button>
              {skillTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    if (!selectedSkills.has(tag)) {
                      setSelectedSkill(new Set([...selectedSkills, tag]));
                    } else {
                      const remainingTags = selectedSkills;
                      remainingTags.delete(tag);
                      setSelectedSkill(new Set(remainingTags));
                    }
                  }}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all ${
                    selectedSkills.has(tag)
                      ? "bg-mercedesTeal text-black"
                      : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
