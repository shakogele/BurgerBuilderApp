import React from 'react';
import itemStyles from './NavigationItem.css';

const navigationItem = (props) => {
  return (
    <li className={itemStyles.NavigationItem}>
      <a href={props.link} className={props.active ? 'active' : null}>{props.children}</a>
    </li>
  );
}

export default navigationItem;
