import React from "react";
import { PlatformTag, SkillTag } from "../../public/projects";

type Props = {
  title: string;
  description: string;
  link?: string;
  skillTags: SkillTag[];
  platformTags: PlatformTag[];
};

const ProjectCard: React.FC<Props> = ({ title, description, link, skillTags, platformTags }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-2xl bg-gray-900 shadow-lg">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Project
        </a>
      )}
      
      <div className="mt-2">
        <h4 className="text-sm text-gray-500">Skills:</h4>
        <div className="flex flex-wrap">
          {skillTags.map((tag) => (
            <span key={tag} className="mr-2 mb-2 px-3 py-1 text-sm bg-blue-600 text-white rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-sm text-gray-500">Platform</h4>
        <div className="flex flex-wrap">
          {platformTags.map((tag) => (
            <span key={tag} className="mr-2 mb-2 px-3 py-1 text-sm bg-green-600 text-white rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
