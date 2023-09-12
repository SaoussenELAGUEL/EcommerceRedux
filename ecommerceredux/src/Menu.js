import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default class Menu extends Component {
  render() {
    return (
      <div>
        



      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
      <Navbar.Brand href="#home">Ecommerce </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Articles" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/listarticles">Liste des articles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/editarticles">Edition des articles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insertarticles">Insertion des articles</NavDropdown.Item>
     
            
          
              </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
       
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Catégories" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/listcategories">Liste des catégories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/editcategories/:id">
               Edition des catégories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insertcategories">Insertion des catégories</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Sous catégories" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/listscategories">Liste des sous catégories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/editscategories/:id">
               Edition des sous catégories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insertscategories">Insertion des sous catégories</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>


        
      </Container>
    </Navbar>
      </div>
    )
  }
}