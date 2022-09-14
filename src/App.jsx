import {useState} from 'react'
import './App.css'

function App() {
  const [valueBool, setValueBool] = useState(0)
  const [input, setInput] = useState("");
  const onHandleChangeState = e => {
    let value = e.target.value.replace(" ","")
    value = value.replace(/([0-9])/g,"")
    setInput(value)
  }
  const onHandleKeyUp = e =>{
    if(e.key === "Enter"){
      console.log("Call API");
    }
  }
  return (
    <div className="App">
      <h1>Componentito</h1>
      <div className="card">
        <input type="hidden"
          value={valueBool}
          readOnly
        />
        <br />
        <input type="text"
          maxLength={64}
          value={input}
          onChange={onHandleChangeState}
          onKeyUp={onHandleKeyUp}
        />
        <button onClick={() => console.log((count) => count + 1)}>Enviar</button>
      </div>
    </div>
  )
}

export default App
