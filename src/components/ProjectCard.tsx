import React from "react";
import { Company, SkillTag } from "../../public/projects";

type Props = {
  title: string;
  description: string[];
  dates?: string;
  company?: Company;
  link?: string;
  skillTags: SkillTag[];
};

const ProjectCard: React.FC<Props> = ({ title, description, link, skillTags, dates, company }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-2xl bg-gray-900 shadow-lg">
      <h2 className="text-lg font-semibold text-white">{title}</h2>

      {/* Date and Company */}
      {(company || dates) && (
        <div className="mt-2">
          <p className="text-gray-300">{company} {dates}</p>
        </div>
      )}
     
     {/* Tags */}
      <div className="mt-2">
        <div className="flex flex-wrap">
          {skillTags.map((tag) => (
            <span key={tag} className="mr-2 mb-2 px-3 py-1 text-sm bg-cyan-500/15 text-cyan-300 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-2">
        {description.map((line, i) => (
            <p key={i} className="text-gray-300">
              {line}
              <br/>
            </p>
          ))}
      </div>

      {/* Project Link */}
      <div className="mt-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline inline-flex items-center"
          >
            View project 
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        )}
      </div>
      
      
    </div>
  );
};

export default ProjectCard;
