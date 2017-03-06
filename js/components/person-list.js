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
            <Person name="Simran"
                    imageUrl="http://2.bp.blogspot.com/_d1Vcjjg964o/Sii10KPT55I/AAAAAAAACGg/oEbg94rV31k/s400/simran-001111.jpg"
                    job="Student"
                    hobbies="sleeping"/>
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
}
