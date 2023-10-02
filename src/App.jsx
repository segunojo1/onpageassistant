import { useState } from 'react'
import './App.css'

function App() {
  
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [assistantContent, setAssistantContent] = useState(''); 

  const handleButtonClick = (x, y, content) => {
    // Calculate the new position and set content
    const newPosition = { x: x, y: y };
    setPosition(newPosition);
    setAssistantContent(content);
  };

  return (
    <>
      <div className='position' style={{position: "relative", height: "100vh"}}>
        <h1>Segun's On page Assistant</h1>
        <div className='btns'>
          <button className='btn' onClick={() => handleButtonClick(50, 400, "THIS IS BUTTON ONE")}>Button 1</button>
          <button className='btn' onClick={() => handleButtonClick(300, 400, "THIS IS BUTTON TWO")}>Button 2</button>
          <button className='btn' onClick={() => handleButtonClick(600, 400, "THIS IS BUTTON THREE")}>Button 3</button>
        </div>
        <div className='assistant' style={{position: "absolute", display: "flex", left: `${position.x}px`, bottom: `${position.y}px`}}>
        <img src="https://gifdb.com/images/high/animated-winter-days-walking-xizdn42xi95y262e.gif" alt="" width="200px" style={{}}/>
        <div>
          <p>{assistantContent}</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
