import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'react-bootstrap';
import {formatCurrency} from '../formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Cart = ({cartItems, removeFromCart, count}) => {
	return (<React.Fragment ><Fade top cascade>
   <Table responsive className='mx-auto justify-content-center mt-2 w-75 rounded'>
		 <thead className='text-center h5'>
    <tr>
      <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
    </tr>
  </thead>

			<tbody className='text-center h6 text-capitalize'>{cartItems.map(item => {
				return (	
    <tr key={item.id}>
      <td>{item.name}</td>
        <td >{item.count}</td>
        <td >{formatCurrency(item.price)}</td>
   		<td><FontAwesomeIcon style={{cursor:'pointer',
   		fontSize:'1.2em',color:'#000'}} icon={faTrashAlt} onClick={()=>removeFromCart(item)}/></td>
    </tr>
  
      

		) 
			})}</tbody>
		
  

	
	</Table></Fade>

<div className='container'>
  <div  className='row'>
<div className="col text-center mx-auto my-3 col-sm-8 col-md-6 col-lg-4">
  <div className="card card-body shadow bg-light text-uppercase ">
           
              <div className="card-title text-center text-primary">
         <h6>cart total</h6>
              </div>
              <div className="row">
          
                <div className="col-6">sub total</div>
                <div  className="col-6">  {formatCurrency(cartItems.reduce((a, c)=>a + c.price*c.count,0 ))}</div>
               
              
                <div className="col-6">tax</div>
                <div className="col-6 tax">$0</div>
                
   
              
                <div className="col-6">shipping</div>
                <div className="col-6 ship">$0</div>
                
              
                <div className="col-6 my-3">order total</div>
                <div className="col-6 my-3 order_tot">{formatCurrency(cartItems.reduce((a, c)=>a + c.price*c.count,0 ))}</div>
                 
              </div>
            </div>
            </div>

    </div>
    </div>
<div className='container d-flex justify-content-center'>
 <div className='row '>
 <div className='col-sm-12  '>
 <NavLink to='/Products'>
 <Button className='mt-2 ' variant='outline-primary'>Continue shopping</Button></NavLink>
 
   <NavLink to={{pathname:'/Checkout'}}><Button className='mt-2 ml-2'  variant='outline-success'>Checkout</Button></NavLink></div>
 </div>
 </div> 
   </React.Fragment>);
}


export default Cart;
