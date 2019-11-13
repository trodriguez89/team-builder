import React, {useState} from "react";
import styled from "styled-components";

const FormDiv = styled.div`


`

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

const onChangeFunction = event => {
    setMember({...member, [event.target.name] : event.target.value})
}

const onSubmitFunction = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({
        name: "",
        email: "",
        role: "",
    })
}
    return (
        <FormDiv>
        <form onSubmit ={onSubmitFunction}>
            <label>Name: </label>
            <input 
            id="name" 
            type="text" 
            name="name"
            onChange = {onChangeFunction}
            />
            <label>E-Mail: </label>
            <input 
            id="email" 
            type ="email" 
            name="email"
            onChange = {onChangeFunction} 
            />
            <label>Role: </label>
            <input 
            id="role" 
            type="text" 
            name = "role"
            onChange = {onChangeFunction}
            />
            <button>Add Team member!</button>
        </form>
        </FormDiv>

    );
}


export default Form;