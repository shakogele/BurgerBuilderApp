import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-config';

const INGREDIENT_PRICES = {
  cheese: 2,
  meat: 3,
  salad: 1,
  bacon: 4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+ 1;
    const updatedingredients = {
      ...this.state.ingredients
    };
    updatedingredients[type] = updatedCount;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: totalPrice, ingredients: updatedingredients});
    this.updatePurchaseState(updatedingredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount === 0){
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedingredients = {
      ...this.state.ingredients
    };
    updatedingredients[type] = updatedCount;
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice: totalPrice, ingredients: updatedingredients});
    this.updatePurchaseState(updatedingredients);
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map( (ingKey) => {
      return ingredients[ingKey]
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: (sum > 0) })
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Shalva Gelnidze",
        address: 'Guramishvili AVE. 41',
        zipCode: "0192",
        country: "Georgia",
        email: "shakogele@gmail.com"
      },
      deliveryMethod: 'fast'
    };

    axios.post('/orders.json', order)
         .then(response => {
            console.log(response);
          })
         .catch((error) => {
           console.log(error)
         })
  }

  render() {
    const disabledInfo = {...this.state.ingredients};
    for(let key in disabledInfo){
      disabledInfo[key] = (disabledInfo[key] <= 0) ? true : false;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaceCancelled={this.purchaseCancelHandler}
            purchaceContinue={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;
