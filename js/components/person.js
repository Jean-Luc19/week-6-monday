import React from 'react';

export default function Person() {
  const name = 'Derek Zoolander';
  const imageUrl = 'http://media.architecturaldigest.com/photos/56be596a202b83b31f121405/master/pass/zoolander-2-movie-set-design-001.jpg';
  const job = 'Male Model';
  return (
    <div className="person">
        <div className ="person-name">{name}</div>
        <img className = "person-img" src={imageUrl} />
        <div className = "person-job">{job}</div>
    </div>
  );
}
