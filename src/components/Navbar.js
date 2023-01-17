import Nav from 'react-bootstrap/Nav';
import React from "react";

function Navbar(props) {
    return (

        <Nav className="navbar bg-primary text-white">
            <div className="container-fluid">
                <a className="navbar-brand text-white" >
                        Country
                </a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2"
                           type="search"
                           placeholder="Search by country"
                           aria-label="Search"
                           value={props.filterText}
                           onChange={(event)=>props.setFilterText(event.target.value)}
                    />
                </form>
            </div>
        </Nav>


    );
}

export default Navbar;
