import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../Ui/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map( (ingredient, index) => {
    return (<li key={index}><span style={{textTransform: 'capitalize'}}>{ingredient}</span> : {props.ingredients[ingredient]} </li>);
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger With Following Ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.totalPrice}</strong></p>
      <p>Continur to Checkout</p>
      <Button buttonType="Danger" clicked={props.purchaceCancelled}>Cancel</Button>
      <Button buttonType="Success" clicked={props.purchaceContinue}>Continue</Button>
    </Aux>
  )
}

export default orderSummary;
