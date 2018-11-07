import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../Ui/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import sideStyles from './SideDrawer.css';

const sideDrawer = (props) => {
  let attachedClasses = [sideStyles.SideDrawer, ((props.open) ? sideStyles.Open : sideStyles.Close)];
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;
