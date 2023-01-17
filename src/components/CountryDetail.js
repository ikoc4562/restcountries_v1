import React, {useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

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

                <div className="m-5">
                    {country.map((item,i)=>(

                        <Card key={i} style={{ width: '50rem' }}>

                            <Nav className="navbar">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="icon col-4">{item.name.common.slice(0,1)}</div>
                                        <div className="col-8"> {item.name.common}/{item.capital}</div>
                                    </div>
                                    <Link to="/"><a type="button" className="btn btn-primary">Back</a></Link>

                                </div>
                            </Nav>

                            <Card.Img variant="top" src={item.flags.png} />
                            <Card.Body>

                                <Card.Text>
                                    The country belongs to <span className="mavi">{item.region}</span> region and <span className="mavi">{item.subregion}</span> sub-region.
                                    Located at the <span className="mavi">{item.latlng[0]}</span>° N and <span className="mavi">{item.latlng[1]}</span>° W, this country has population of <span className="mavi">{item.population}</span> and it has gained the indepented, according to CIA World Factbook.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
                </div>
    );

}

export default CountryDetail;
