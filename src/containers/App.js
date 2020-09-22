import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation.js';
import Banner from '../components/Banner/Banner';
import Products from '../components/pro_collection/Products';
import {prods} from '../components/pro_collection/prods';
import FilterBar from '../components/pro_collection/FilterBar';
import Cart from '../components/shoppingCart/Cart';
import {HashRouter as Router, Route,Switch } from 'react-router-dom';
import Checkout from '../components/shoppingCart/Checkout';
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			prods:prods,
      searchField:'',
      sort:'',
      cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')): []
      
      
		}
	}
  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    
    this.setState({cartItems:cartItems.filter(x => x.id !== product.id)});
     localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(x => x.id !== product.id)));
} 
  addToCart = (product) => {
      let alreadyInCart= false;
  const cartItems = this.state.cartItems.slice();

  cartItems.forEach(item => {
    if(item.id === product.id) {
      item.count++;
      alreadyInCart= true;
    } 
    
  });
  if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
 
  onSearchChange = (event) => {
  this.setState({searchField:event.target.value});
  }
  sortProducts = (event) => {
  this.setState({sort:event.target.value,
    prods:prods.filter(prod => {
     return event.target.value === 'Highest' ? prod.price > 100 : event.target.value ===
      'Lowest'? prod.price < 100 : prod.price > 0


  })})}

  render() {
   
      
      const filterdProducts = this.state.prods.filter(prod => {
    return prod.name.toLowerCase().includes(this.state.searchField.toLowerCase()) 
  })
    return (

       

   <Router >
          <Navigation   props={this.props} count={this.state.cartItems.length} />

        <Switch>
          <Route path='/' exact component={Banner} />
            <Route path='/Products'  >
  {<FilterBar SearchChange={this.onSearchChange} count={this.state.prods.length} 
  sortProducts={this.sortProducts} />}
  { <Products count={this.state.prods.length} 
  addToCart={this.addToCart}  prods={filterdProducts} />}
            </Route>
        

          <Route path='/Cart'  >
          <Cart count={this.state.cartItems.length}
           removeFromCart={this.removeFromCart} 
          cartItems={this.state.cartItems} />}
          </Route>
          
         
          <Route path='/Checkout' component={()=><Checkout cartItems={this.state.cartItems} />}/>
          </Switch>
      

</Router>
      );
  }
}

export default App;
