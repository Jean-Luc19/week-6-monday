import React from 'react';

export default function Person(props) {
  return (
    <div className="person">
        <div className ="person-name">{props.name}</div>
        <img className = "person-img" src={props.imageUrl} />
        <div className = "person-job">{props.job}</div>
        <div className = "person-hobbies">{props.hobbies}</div>
    </div>
  );
}
// export default class Person extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       highlight: false
//     };
//     this.onClick = this.onClick.bind(this);
//   }
//
// }
