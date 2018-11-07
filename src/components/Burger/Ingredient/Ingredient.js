import React, {Component} from 'react';
import ingredientStyles from './Ingredient.css';

import PropTypes from 'prop-types';

class ingredient extends Component {

  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom') :
        ingredient = <div className={ingredientStyles.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={ingredientStyles.BreadTop}>
            <div className={ingredientStyles.Seeds1}></div>
            <div className={ingredientStyles.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={ingredientStyles.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={ingredientStyles.Cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={ingredientStyles.Salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={ingredientStyles.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }

}

ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default ingredient;
