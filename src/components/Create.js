import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';

function Create(){
    const [firstName, setFirstName]=useState(0);
    const [lastName, setLastName]=useState(0);
    const [checkbox,setCheckbox]=useState(false);
    const postData = () => {
        axios.post('https://623c9d3e7efb5abea6846316.mockapi.io/data' , {
            firstName,
            lastName,
            checkbox
        })
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
    }

    return(
        <Form className='create-form'>
            <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    )
}

export default Create