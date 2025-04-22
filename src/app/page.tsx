"use client"
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
    <div className="min-h-screen bg-gray-950 text-white px-8 py-20">

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10">
        <img
          src="/portfolio/profile.png"
          className="w-24 h-24 rounded-full mb-4 border-2 border-gray-700"
        />
        <h1 className="text-3xl font-bold">Cat Pereira</h1>
        <p className="text-gray-400 text-lg mt-2">
          Software Developer
        </p>
        <p className="text-gray-400 text-lg mt-2">
          Gameplay Programmer at <a href="https://easy.gg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 hover:underline">Easy Games</a>
        </p>
        {/* Social Links */}
        <div className="flex gap-4 mt-3">
          {/* GitHub */}
          <a href="https://github.com/catherinepereira" target="_blank" rel="noopener noreferrer" className="group">
            <svg className="w-6 h-6 fill-white group-hover:fill-cyan-400 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/catpereira" target="_blank" rel="noopener noreferrer" className="group">
            <svg className="w-6 h-6 fill-white group-hover:fill-cyan-400 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:catpereiradev@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
          <svg className="w-6 h-6 fill-white group-hover:fill-cyan-400 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
          </svg>
          </a>
        </div>
      </div>

      <hr className="w-6xl h-0.5 mx-auto my-4 bg-gray-800 border-0 rounded-med md:my-10 dark:bg-gray-700"/>

      <h1 className="text-4xl font-bold text-center mb-6">Portfolio</h1>

        {/* Skill Filter */}
        <div className="max-w-6xl mx-auto mb-6 text-center">
        <button
          onClick={() => setSelectedSkill(new Set())}
          className={`px-3 py-1 mr-2 mb-2 rounded-md ${
            selectedSkills.size === 0 ? "bg-cyan-500/15" : "bg-gray-900"
          }  ${selectedSkills.size === 0  ? "text-cyan-300" : "text-white"}`}
        >
          All
        </button>
        {skillTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              if (!selectedSkills.has(tag)) { 
                setSelectedSkill(new Set([...selectedSkills, tag]))
              } else {
                const remainingTags = selectedSkills;
                remainingTags.delete(tag);
                setSelectedSkill(new Set(remainingTags))
              }
            }}
            className={`px-3 py-1 mr-2 mb-2 rounded-md ${
              selectedSkills.has(tag) ? "bg-cyan-500/15" : "bg-gray-900"
            } ${
              selectedSkills.has(tag) ? "text-cyan-300" : "text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
