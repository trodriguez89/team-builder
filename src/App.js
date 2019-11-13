import React, {useState} from 'react';
import Form from "./components/Form";
import ExampleForm from "./components/ExampleForm";
import logo from './logo.svg';
import './App.css';

function App() {
const [info, setInfo] = useState([
  {
  id: Date.now(),
  name: "Thomas Rodriguez",
  email: "thomas@myspace.com",
  role: "Founder, CEO, Motivator, BEST BOSS EVER",
}
])

const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role,
  }
setInfo([...info, newMember]);
}



console.log(info)
  return (
    <div className="App">
      <h1>Meet the Team!</h1>
      <Form addNewMember={addNewMember}/>
      <ExampleForm exampleInfo ={info}/>
    </div>
  );
}

export default App;
