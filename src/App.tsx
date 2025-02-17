
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateIndex from "./Components/StateIndex";
import ElementList from "./Components/ElmentList";

type typeArrayUsers = {
    name: string;
    age: number;
}[]

function App() {
  const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const arrayUsers: typeArrayUsers = [
        {name: "Alise", age: 35},
        {name: "Ben", age: 45},
        {name: "Mask", age: 55}

    ];
  return (
    <>
      <div>
          {arrayUsers.map((elem, index) => (
              <li key={index}>
                  {elem.name} - Возраст: {elem.age}
              </li>
          ))}
         <ElementList name={'Arslan'} isPacked={true}/>
          <ElementList name={'Ben'} isPacked={true}/>
          <ElementList name={'Mask'} isPacked={false}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <StateIndex index ={index1} setIndex={setIndex1}/>
          <StateIndex index ={index2} setIndex={setIndex2}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
