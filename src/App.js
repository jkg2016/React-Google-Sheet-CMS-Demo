import React, {useState, useEffect} from 'react';
import './App.css';
import TableTop from 'tabletop';
import Employee from './components/Employee';
import NavBar from './components/NavBar';



import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const[data, setData] = useState([]);

    useEffect(()=> {
      TableTop.init({
        key: '1d-Gbh8R9sc4DwT2lFPUGQ4EToBOGpUQNm16_O45fO0w',
        callback: googleData => {
          setData(googleData)
        },
        simpleSheet: true
      })
    }, [])
    console.log(data);
   
      const { isAuthenticated } = useAuth0();
   
  return (
    <div className="App">
        <p>
          React + Google Sheet Demo
        </p>
        <div className='nav-bar'>
        <NavBar />
        </div>
        {isAuthenticated ?
      <div id="employee-detail">
      {
            data.map(obj => {
              return <Employee employee={obj.employee} favDog={obj.favDog} img={obj.img} />
            })
          }
      </div>
      :
      <div>
        <p>Please login</p>
        </div>
        }
  </div>
  );
}

export default App;
