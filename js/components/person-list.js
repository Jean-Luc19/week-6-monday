import React from 'react';
import Person from './person';

export default function PersonList() {
  const people = [];
  for (let i = 0; i < 25; i++) {
    people.push(<Person />);
  }
  return (
    <div className="person-list">
      {people}
    </div>
  );
}
