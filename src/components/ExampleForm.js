import React from "react";

const ExampleForm = props => {
    return (
        
        <div>
            {props.exampleInfo.map(info =>(
            <div>
            <h2>{info.name}</h2>
            <p>{info.email}</p>
            <p>{info.role}</p>
            </div>
            ))}
        </div>

    );
}


export default ExampleForm;