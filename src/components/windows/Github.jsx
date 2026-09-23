import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      {data.image && (
        <div className="img-wrapper">
          <img src={data.image} alt={data.title} loading="lazy" />
        </div>
      )}
      <div className="card-body">
        <h2>{data.title}</h2>
        <p className="description">{data.description}</p>

        {data.tags && data.tags.length > 0 && (
          <div className="tags">
            {data.tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="urls">
          {data.repoLink && (
            <a
              href={data.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          )}
          {data.demoLink && (
            <a
              href={data.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Github = ({
  windowName = "github",
  setWindowsState,
  zIndex = 10,
  onFocus,
}) => {
  return (
    <MacWindow
      title="GitHub — Featured Projects"
      width="52vw"
      height="64vh"
      defaultPos={{ x: 160, y: 70 }}
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="github-window">
        <div className="cards-grid">
          {githubData.map((project) => (
            <GitCard data={project} key={project.id} />
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default Github;
