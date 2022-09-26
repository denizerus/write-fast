import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SpeedCheck from './speedcheck/SpeedCheck';
import {Results} from './results/Results';
import {Challanges} from './challanges/Challanges';
import {Routes, Route, Link} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';

function ColorSchemesExample() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const {isDarkTheme, dark, light} = context;
        const theme = isDarkTheme ? dark : light;
        return (
          <div className={`'app-layout' ${theme.app} `}>
            <Navbar bg={isDarkTheme ?  "light" : "dark" } variant={isDarkTheme ?  "light" : "dark"}>
              <Container className="rounded">
                <Navbar.Brand href="/">SpeedCheck</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link exact="true" as={Link} to="/results">
                    Results
                  </Nav.Link>
                  <Nav.Link exact="true" as={Link} to="/challanges">
                    Challanges
                  </Nav.Link>
                </Nav>
                <button className={`'btn ${theme.toggleButton}'`} onClick={context.changeTheme} >{theme.isDarkTheme ? "Açık Tema" : "Koyu Tema"}</button>
              </Container>
            </Navbar>
            <div>
              <Routes>
                <Route path="/" element={<SpeedCheck />} />
                <Route path="/results" element={<Results />} />
                <Route path="/challanges" element={<Challanges />} />
              </Routes>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ColorSchemesExample;
