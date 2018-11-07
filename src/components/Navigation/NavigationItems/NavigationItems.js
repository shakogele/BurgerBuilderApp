import React from 'react';
import navStyles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={navStyles.NavigationItems}>
      <NavigationItem link="/home" active="true">Home</NavigationItem>
      <NavigationItem link="/checkout">Checkout</NavigationItem>
    </ul>
  )
}

export default navigationItems;
