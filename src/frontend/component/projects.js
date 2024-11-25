import React, { useEffect, useRef, useState } from "react";
import projectsList from "../projects/projects.json";
import "../../style/style.css";

const Project = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const getProjectWidth = () => {
      const firstProject = container.querySelector(".projectContainerWide");
      return firstProject ? firstProject.offsetWidth + 20 : 0; // Include gap
    };

    const scrollToProject = (index) => {
      const projectWidth = getProjectWidth();
      const scrollLeft = index * projectWidth - container.offsetWidth / 2 + projectWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    };

    const startAutoScroll = () => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % projectsList.length;
          scrollToProject(nextIndex);
          return nextIndex;
        });
      }, 2000); // Change project every 2 seconds

      return interval;
    };

    const autoScrollInterval = startAutoScroll();

    return () => clearInterval(autoScrollInterval);
  }, []);

  return (
    <div ref={containerRef} className="projectsContainer">
      {projectsList.map((project, index) => (
        <div
          key={index}
          className={`projectContainerWide ${
            index === activeIndex ? "activeProject" : ""
          }`}
        >
          <p>
            <strong>{project.projectTitle}</strong>
          </p>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <div className={`imageContainer ${project.imageClass}`}></div>
          </a>
          <div className="projectDescription">
            <p>{project.projectDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
