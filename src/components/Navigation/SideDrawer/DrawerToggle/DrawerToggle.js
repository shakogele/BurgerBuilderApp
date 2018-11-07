import React from 'react';
import drawerStyles from './DrawerToggle.css';

const drawerToggle = (props) => {
  return (
    <div className={drawerStyles.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default drawerToggle;
