import React, {useState} from 'react';
import Form from "./components/Form";
import ExampleForm from "./components/ExampleForm";
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';

const MainContain = styled.div`
  border: 2px solid red;
  text-align: center;
  height: 100vh;

`;


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

  return (
    <MainContain>
      <h1>Meet the Team!</h1>
      <Form addNewMember={addNewMember}/>
      <ExampleForm exampleInfo ={info}/>
    </MainContain>
  );
}

export default App;
