import './App.css'
import { useState } from 'react';


function App() {
  const [text, setText] = useState('api call not here yet')

  const getApiCall = async () => {
    const data = await fetch('http://numbersapi.com/random/math');
    const response = await data.text();
    setText(response);
  }

  return (
    <>
      <div>
        {/* <p>Hi! This is the web dev workshop!</p>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Click me to add 1</button>
        <h1>{text}</h1>
        <br/>
        <textarea 
          value={text} 
          onChange={(event) => setText(event.target.value)}
        /> */}
        <p>{text}</p>
        <button onClick={() => getApiCall()} >Call the api to get random math fact</button>
      </div>
    </>
  )
}

export default App
