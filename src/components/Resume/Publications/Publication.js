import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <li>
    <a id="title" href={data.link}>{data.title}. </a>
    <span id="journal">{data.journal}</span>, {data.year}
  </li>
);

Publication.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Publication;
