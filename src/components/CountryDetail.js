import React, {useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CountryDetail() {
    const {code}= useParams();
    const [country,setCountry]= useState([]);

    useEffect(()=>
        {
            fetch(`https://restcountries.com/v3.1/name/${code}`)
                .then((res)=>res.json())
                .then((data)=>setCountry(data))
                console.log(country)
        }
    )
    return (

<div>
                    {country.map((item,i)=>(
                        <Card key={i} style={{ width: '18rem' }}>
                            <Card.Title>{item.name.common}</Card.Title>
                            <Card.Img variant="top" src={item.flags.png} />
                            <Card.Body>

                                <Card.Text>
                                    The country belongs to {item.region} region and {item.subregion} sub-region.
                                    Located at the {item.latlng[0]}° N and {item.latlng[1]}° W, this country has population of {item.population} and it has gained the indepented, according to CIA World Factbook.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
</div>
    );

}

export default CountryDetail;
