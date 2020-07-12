import React, {useState, useEffect} from 'react';
import './App.css';
import TableTop from 'tabletop';

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

  return (
    <div className="App">
        <p>
          React + Google Sheet Demo
        </p>
      <div id="employee-detail">
      {
            data.map(obj => {
              return (
                <div key={obj.employee}>
                  <p>{obj.employee}</p>
                  <p>{obj.favDog}</p>
                  <img alt={obj.favDog} src={obj.img} />
                </div>
              )
            })
          }
      </div>
  </div>
  );
}

export default App;
