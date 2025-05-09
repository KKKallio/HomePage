import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Publications from '../components/Resume/Publications';
import Experience from '../components/Resume/Experience';

import degrees from '../data/resume/degrees';
import publications from '../data/resume/publications';
import work from '../data/resume/work';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Publications: () => <Publications data={publications} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
