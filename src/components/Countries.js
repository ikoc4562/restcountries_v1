import React, {useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';

import {Link} from "react-router-dom";


function Countries() {
        const [countries,setCountries]= useState([]);

        useEffect(()=>
            {
                fetch("https://restcountries.com/v3.1/all")
                    .then((res)=>res.json())
                    .then((data)=>setCountries(data))
            }

        )

    return (

    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Regions</th>
            <th>Population</th>
            <th>Languages</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {countries.map((item,i)=> (

        <tr key={i}>
            <td><img src={item.flags.png}/></td>
            <td>{item.name.common}</td>
            <td>{item.region}</td>
            <td>{item.population}</td>
            <td>
                <ul>
                    <li>
                        {console.log(Object.values(item.languages).length)}
                    </li>
                </ul>

            </td>
            <td><Link to={`country/${item.name.common.toLowerCase()}`}>
                {'>'}
            </Link></td>
        </tr>
        ))}
        </tbody>
    </Table>
        );

}

export default Countries;
