import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {

	return (	
    <div className='container-fluid px-0' >

  <Navbar className='nav_bar' expand="lg" fixed='top' bg='dark' variant='dark'>
   <Navbar.Brand >
      <NavLink to={{pathname:'/'}} className='text-white'> <FontAwesomeIcon
       icon={faHome}
        width="30"
        height="30"
      
      /></NavLink>
    </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav  className="ml-auto" >
       <NavLink  to={{pathname:'/Products'}}>   
        
  Products
</NavLink> 
  <NavLink    to={{pathname:'/Cart'}}>  
  Cart<FontAwesomeIcon className='pl-1' icon={faShoppingCart}/> <span style={{position:'absolute', top:'-50%',right:'-6%',fontSize:'.8rem'}}>{props.count}</span>
  
    </NavLink>
    
  </Nav>
  </Navbar.Collapse>
  </Navbar>
  
</div>
);
}




export default Navigation;




