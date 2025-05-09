import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publications/Publication';

const Publications = ({ data }) => (
  <div className="publication">
    <div className="link-to" id="publication" />
    <div className="title">
      <h3>Publication</h3>
    </div>
    <ol className="bracketed-list">
      {data.map((s) => (
        <Publication data={s} key={s.title} />
      ))}
    </ol>
  </div>
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

export default Publications;
