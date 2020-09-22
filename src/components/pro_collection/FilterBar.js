import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import './Products.css'
const FilterBar = ({SearchChange, sort, count, sortProducts}) => {
	return (<Fade left cascade><Container fluid className='mb-4 '>
		
	
		<Row><Col xs={12}><h3 className='mx-auto text-center py-3'>Our Products: {count}</h3>
		</Col>

		</Row>
		<Row className='d-flex justify-content-center'>

			<Col xs={6} md={4} className='input-group my-3 '>
			<input name='search' onChange={SearchChange} type='search' className='form-control  '  placeholder='Search Products'/>

			  <div style ={{cursor:'pointer'}} className="input-group-append">
          <div className="input-group-text"><FontAwesomeIcon icon={faSearch} /></div>
       
        </div>

        </Col>




			<Col xs={6} md={4}><select  onChange={sortProducts} className='form-control my-3 px-1'  placeholder='Filter By Date'>
				<option value='all' >All</option>'
				<option value='Lowest'>Lowest Prices</option>
				<option value='Highest'>Highest Prices</option>
			
			</select></Col>
		</Row>
		
	
		<hr />
	</Container></Fade>);
}



export default FilterBar;