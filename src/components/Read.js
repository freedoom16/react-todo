import React, {useState, useEffect} from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Read() {

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log(data);
     }

    const getData = () => {
        axios.get(`https://623c9d3e7efb5abea6846316.mockapi.io/data`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const onDelete = (id) => {
        axios.delete(`https://623c9d3e7efb5abea6846316.mockapi.io/data/${id}`)
     .then(() => {
        getData();
    })
}

    const [APIData, setAPIData]=useState([]);

    useEffect(() => {
        axios.get(`https://623c9d3e7efb5abea6846316.mockapi.io/data`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                  return (
                    <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checkbox' : 'unchecked'}</Table.Cell>
                        <Link to='/Update'>
                        <Table.Cell><button onClick={() => setData(data)}>Update</button></Table.Cell>
                        </Link>
                        <Table.Cell><button onClick={() => onDelete(data.id)}>Delete</button></Table.Cell>
                    </Table.Row>    
                 )})}
                </Table.Body>
            </Table>
        </div>
    )
}