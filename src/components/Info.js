import React from "react";
import styled from "styled-components";

const MainDivStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: lightgray;
    height: 100%;
    
`

const InfoDiv = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid black;
    background-color: white;
    margin-top: 20px;

    
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