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
    <div className="group relative bg-gray-900 border-l-2 border-gray-800 hover:border-mercedesTeal transition-colors duration-200 p-6">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-1">
          {/* Title and Company */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
              {title}
            </h3>
            {(company || dates) && (
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {company} {dates}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mb-4 space-y-2 text-gray-400 leading-relaxed">
            {description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-mercedesTeal hover:text-white font-medium text-sm uppercase tracking-wide transition-colors group/link"
            >
              <span>View Project</span>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
