import React from 'react';
import controlsStyles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {

  return (
    <div className={controlsStyles.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
      {controls.map( (control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            add={ () => props.add(control.type) }
            remove={ () => props.remove(control.type) }
            disabled={ props.disabledInfo[control.type] }
          />
        )
      } )}
      <button className={controlsStyles.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
  );
}

export default buildControls;
