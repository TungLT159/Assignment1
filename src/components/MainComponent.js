import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents'
import DishDetail from './DishdetailComponent'
import {DISHES} from '../shared/dishes'

class Main extends Component {
constructor(props){
  super(props);

  this.state = {
    dishes: DISHES,
    selectedDish: null
  }
}

onDishSelect(dishId){
    this.setState({ selectedDish: dishId });
}
  render() {
    return (
      <div>
        <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="#">Trang chủ</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish}
          onClick = {(dishId)=>this.onDishSelect(dishId)}  />
        <DishDetail dish={this.state.dishes.filter(dish=> dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;