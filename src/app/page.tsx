"use client"
import { useState } from "react";
import { PlatformTag, projects, SkillTag } from "../../public/projects";
import ProjectCard from "../components/ProjectCard";

const skillTags = Object.values(SkillTag);
const platformTags = Object.values(PlatformTag);

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<SkillTag | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformTag | null>(null);

  const filteredProjects = projects.filter((project) => {
    const skillMatch = selectedSkill ? project.skillTags.includes(selectedSkill) : true;
    const platformMatch = selectedPlatform ? project.platformTags.includes(selectedPlatform) : true;
    return skillMatch && platformMatch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-20">

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10">
        <img
          src="" 
          className="w-24 h-24 rounded-full mb-4 border-2 border-gray-700"
        />
        <h1 className="text-3xl font-bold">Cat Pereira</h1>
        <p className="text-gray-400 text-lg mt-2">
          Software Developer
        </p>
        {/* Social Links */}
        <div className="flex gap-4 mt-3">
          <a href="https://github.com/catherinepereira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/catpereira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            LinkedIn
          </a>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>

      {/* Skill Filter */}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold mb-2">Filter by Skill</h2>
        <button
          onClick={() => setSelectedSkill(null)}
          className={`px-3 py-1 mr-2 mb-2 rounded-full ${
            !selectedSkill ? "bg-gray-700" : "bg-gray-900"
          }`}
        >
          All
        </button>
        {skillTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedSkill(tag)}
            className={`px-3 py-1 mr-2 mb-2 rounded-full ${
              selectedSkill === tag ? "bg-gray-700" : "bg-gray-900"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Platform Filter */}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold mb-2">Filter by Platform</h2>
        <button
          onClick={() => setSelectedPlatform(null)}
          className={`px-3 py-1 mr-2 mb-2 rounded-full ${
            !selectedPlatform ? "bg-gray-700" : "bg-gray-900"
          }`}
        >
          All
        </button>
        {platformTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedPlatform(tag)}
            className={`px-3 py-1 mr-2 mb-2 rounded-full ${
              selectedPlatform === tag ? "bg-gray-700" : "bg-gray-900"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
