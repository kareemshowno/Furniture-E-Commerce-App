import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row,Col} from 'react-bootstrap';
import './Banner.css';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';


const Banner = () => {
	return(

		
		<Container className='banner d-flex ' fluid >
		  
		<Row>
	 
		<Col className='align-self-center'>	
		<Fade left cascade>
		<h1  className='text-uppercase text-white'>minimalist </h1>
		<h1  className='text-uppercase text-white'> interior style</h1>
		<hr  className='w-100 text-white bg-light' />
		<Link to='/products'>
		<button  href='/products' className='btn btn_' >View Collection</button>
		</Link>
	</Fade>
		</Col>
	
		</Row>
		</Container>
	
		);
}




export default Banner;