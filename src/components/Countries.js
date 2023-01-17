import React, {useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';

import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Form from "react-bootstrap/Form";


function Countries() {
        const [countries,setCountries]= useState([]);
        const [filterText,setFilterText]= useState('');
        const filtered= countries.filter(f => f.name.common.
        toString().toLowerCase()
            .includes(filterText.toLowerCase()) || filterText === '');

        const [pagination, setPagination] = useState({
            currentPage: 1,
            dataShowLenght: 5,
        });





        useEffect(()=>
            {
                fetch("https://restcountries.com/v3.1/all")
                    .then((res)=>res.json())
                    .then((data)=>setCountries(data))
            }

        )
    return (

        <div>

      <Navbar filterText={filterText} setFilterText={setFilterText}/>

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
        {filtered.slice(
            (pagination.currentPage - 1) * pagination.dataShowLenght,
            pagination.dataShowLenght * pagination.currentPage
        ).map((item,i)=> {
        const lng= Object.values(item.languages).map((it,i)=>
            <li key={i}>{it}</li>
        )
            return (
                <tr key={i}>
                    <td><img src={item.flags.png}/></td>
                    <td>{item.name.common}</td>
                    <td>{item.region}</td>
                    <td>{item.population}</td>
                    <td>
                        <ul>
                            <li>
                                {lng}
                            </li>
                        </ul>

                    </td>
                    <td><Link to={`country/${item.name.common.toLowerCase()}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-chevron-right">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Link></td>
                </tr>
            )
            }
        )}
        </tbody>
    </Table>
            <Pagination filtered={filtered}
                        pagination={pagination}
                        setPagination={setPagination}
            />
        </div>
        );

}

export default Countries;
