import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import burgerClasses from './Burger.css';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients).map( (ingKey) => {
    return [...Array(props.ingredients[ingKey])].map( (_, i) => {
      return <Ingredient
        key={ingKey+i}
        type={ingKey}
        />;
    })
  }).reduce(( arr, el ) => {
    return arr.concat(el);
  }, [])

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please Add Ingredients</p>
  }
  return (
    <div className={burgerClasses.Burger}>

      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
}

export default burger;
