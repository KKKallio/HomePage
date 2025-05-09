import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/academy';

const AcademIcons = () => (
  <span className="icons-inline">
    {data.map((s) => (
      <a href={s.link} aria-label={s.label}>
        <FontAwesomeIcon icon={s.icon} />
        <span>{s.label}</span>
      </a>
    ))}
  </span>
);

export default AcademIcons;
