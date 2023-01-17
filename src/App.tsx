import React from 'react';
import {Route,Routes,Link,NavLink} from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetail";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <Container>
          <Row >
              <Col>
      <Routes>
          <Route path='/' element={<Countries/>}/>
          <Route path='/country/:code' element={<CountryDetail/>}/>
      </Routes>
              </Col>
          </Row>
      </Container>

  );
}

export default App;
