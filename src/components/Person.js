import React from 'react';

class Person extends React.Component {
  
  render() {
    console.log('person props', this.props);
    return (
    <div>
      {this.props.person.age}
      {this.props.person.name}
      {this.props.person.points}
      {this.props.person.rank}
    </div>
    )}; 
}

export default Person;