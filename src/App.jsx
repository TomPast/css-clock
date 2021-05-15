import React, { useState, useEffect } from 'react'
import invert from 'invert-color';
import './App.css'

function App() {
  const [clock, setClock] = useState(new Date())
  const [HEXclock, setHEXClock] = useState("#000000")

  useEffect(() => {
    const interval = setInterval(
      () => getTime(),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

  const getTime = () => {
    const d = new Date();
    setClock(d)
    getHEXFromDate(d)
  }

  const getHEXFromDate = (date) => {
    const clockText = date.toLocaleTimeString().split(":")
    setHEXClock("#"+clockText[0]+clockText[1]+clockText[2])
  }


  return (
    <div className="App" style={{backgroundColor: HEXclock}}>
      <h1 className="title" style={{color: invert(HEXclock, true)}}>{HEXclock}</h1>
    </div>
  )
}

export default App
