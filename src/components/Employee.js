import React from 'react';

const Employee = ({employee, favDog, img}) => {
    return (
        <div key={employee}>
        <p>{employee}</p>
        <p>{favDog}</p>
        <img alt={favDog} src={img} />
      </div>
      );
}
 
export default Employee;