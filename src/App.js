import React, { useState } from 'react';
import Form from "./components/Form";
import Info from "./components/Info";
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';

const MainContain = styled.div`
  text-align: center;
  height: 100vh;

`;

const H1Style = styled.h1`
  background-color: slategrey;
  color: white;
  padding: 1% 0;
  border-bottom: 1px solid black;
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
      <H1Style>Meet the Team!</H1Style>
      <Form addNewMember={addNewMember} />
      <Info exampleInfo={info} />
    </MainContain>
  );
}

export default App;
