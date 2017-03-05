import React from 'react';
import Person from './person';

export default function PersonList() {
  Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon',
    job: 'Entertaining Er'
};
    return (
        <div className="person-list">
            <Person name="Derek Zoolander" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
}
