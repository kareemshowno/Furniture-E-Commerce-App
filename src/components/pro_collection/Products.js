import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import './Products.css';
import {formatCurrency} from '../formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Products = ({prods, count, sortprods, addToCart}) => {
	const [productState,setProduct] =useState({
		product:null,

	})


	const openModal = (product) => {
    setProduct({product});
  }
 const closeModal = () => {
    setProduct({product:null})
  }
	return (<React.Fragment>
		
		<Container className='papa'>
<Fade bottom cascade>
		<Row className=' justify-content-center'>
			
	{prods.map(pro => {
		return(	<Col  xs={10} md={4} lg={3} className='product_card m-4 shadow' key={pro.id}>

			<div  onClick={()=> openModal(pro)}  className='img-container rounded my-2 px-2'>
		<img  width='200' height='200' src={pro.img} alt={'img'+pro.id}/>
		</div>
		<hr/>
		<div className='pro_describ d-flex justify-conent-space-between'>
		<h5 className='mr-auto  '>{formatCurrency(pro.price)}</h5><h5 className='text-capitalize text-center'>{pro.name}</h5>
		</div>
	<hr/>
		<button  className='btn btn-dark btm-sm mb-4 mr-5 text-capitalize' onClick={()=>addToCart(pro)}>
		<FontAwesomeIcon
		className='mr-2' icon={faCartPlus}/>
		add to cart</button>
		<FontAwesomeIcon  onClick={()=> openModal(pro)} className='modal_expand ml-5 mb-2' icon={faSearchPlus}/>

		</Col>	
	);
	
	})}

	</Row>
</Fade>

	</Container>


		{productState.product !== null ? 
		 <Modal id='modal' isOpen={true} 
		  ariaHideApp={
    false
  /* Boolean indicating if the appElement should be hidden */}>
		<Zoom >
		 <Container fluid >
		<Row className='justify-conent-space-between pt-5 px-0'>
		<Col  xs={12} md={4}>
		<div className='bg-light img-container py-2 rounded'><img className='img-fluid '  width='300' height='250' alt='product' src={productState.product.img} /></div></Col>
		<Col xs={12} md={6} className='border-left'>
		<h3 className='text-capitalize text-center pt-2 pb-3 border-bottom'>{productState.product.name}</h3>
		<p className='h5 text-muted p-2'>{productState.product.description}</p>
		<h5 className='py-2 bg-light border rounded w-25  text-center'>{formatCurrency(productState.product.price)}</h5>

		<button className='mt-4 btn btn-danger close-modal mr-2' onClick={()=>closeModal()}>Back</button>
		<button className='mt-4 btn btn-dark btm-sm  text-capitalize ' onClick={()=>addToCart()}>
		
		<FontAwesomeIcon
		className='mr-2' icon={faCartPlus}/>
		add to cart</button>

		</Col>
		
</Row>	</Container></Zoom>
		</Modal>: productState.product == null}

	
	</React.Fragment>)
}


export default Products;