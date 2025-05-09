import React, { useState, useEffect } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons/faBuildingColumns';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const Age = () => {
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date('1999-06-17T09:00:00');
    const now = new Date();

    // Last birthday
    const thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const lastBirthday = now >= thisYearBirthday
      ? thisYearBirthday
      : new Date(now.getFullYear() - 1, birthDate.getMonth(), birthDate.getDate());

    const nextBirthday = new Date(
      lastBirthday.getFullYear() + 1,
      birthDate.getMonth(),
      birthDate.getDate(),
    );
    const fullYears = lastBirthday.getFullYear() - birthDate.getFullYear();
    const msSinceLastBirthday = now - lastBirthday;
    const msBetweenBirthdays = nextBirthday - lastBirthday;

    const fractionalYear = msSinceLastBirthday / msBetweenBirthdays;

    const totalAge = (fullYears + fractionalYear).toFixed(10);

    setAge(`${totalAge} years`);
  };

  useEffect(() => {
    calculateAge();

    const timer = setInterval(() => {
      calculateAge();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{age}</span>;
};

const data = [
  {
    label: <Age />,
    icon: faUser,
  },

  {
    label: 'Amsterdam, Netherlands',
    icon: faLocationDot,
  },
  {
    label: 'Amsterdam UMC',
    icon: faBuildingColumns,
  },
];

export default data;
