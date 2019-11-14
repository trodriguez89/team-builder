import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const MainDivStyle = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightgray;
    height: 100%;
    
`

const InfoDiv = styled.div`
    width: 300px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid black;
    background-color: white;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
    font-family: 'Source Sans Pro', sans-serif;
    border-radius: 10px;
    
`

const Info = props => {
    return (
        <MainDivStyle>
            <div>
                {props.exampleInfo.map(info => (
                    <InfoDiv>
                        <h2>{info.name}</h2>
                        <p>{info.email}</p>
                        <p>{info.role}</p>
                    </InfoDiv>
                ))}
            </div>
        </MainDivStyle>
    );
}


export default Info;