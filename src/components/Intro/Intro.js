import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/intro';

const Intro = () => (
  <ul className="icons">
    {data.map((s) => (
      <li>
        <div>
          <FontAwesomeIcon icon={s.icon} />
          <span>{s.label}</span>
        </div>
      </li>
    ))}
  </ul>
);

export default Intro;
