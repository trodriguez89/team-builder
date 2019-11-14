import React, { useState } from "react";
import styled from "styled-components";
import {Button} from "reactstrap";

const FormDiv = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid black;

`;

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const onChangeFunction = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
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
            <form onSubmit={onSubmitFunction}>
                <label>Full Name: </label>
                <input
                    value={member.name}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="name..."
                    required
                    onChange={onChangeFunction}
                />
                <label>E-Mail: </label>
                <input
                    value={member.email}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e-mail..."
                    required
                    onChange={onChangeFunction}
                />
                <label>Role: </label>
                <input
                    value={member.role}
                    id="role"
                    type="text"
                    name="role"
                    placeholder="role..."
                    required
                    onChange={onChangeFunction}
                />
                <Button color="primary" type="submit">Add Team member!</Button>
            </form>
        </FormDiv>

    );
}


export default Form;