import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Publication from '../components/Resume/Publications/Publication';
import publications from '../data/resume/publications';
import AcademIcons from '../components/Intro/AcademIcons';

// NOTE: sections are displayed in order defined.
const Publications = ({ data }) => (
  <Main
    title="Publication"
    description="Kallio's Publications."
  >
    <article className="post" id="publication">
      <header>
        <div className="title">
          <h2>
            <Link to="/publication">Publication</Link>
          </h2>
        </div>
      </header>
      <ol className="bracketed-list">
        {data.map((s) => (
          <Publication data={s} key={s.title} />
        ))}
      </ol>
      <span>
        You Could also find my publciations on <AcademIcons /> !
      </span>
    </article>
  </Main>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      journal: PropTypes.string,
      year: PropTypes.number,
    }),
  ),
};

Publications.defaultProps = {
  data: [],
};

const PublicationsPage = () => (
  <Publications data={publications} />
);

export default PublicationsPage;
