import React from 'react';
import toolbarStyles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return (
    <header className={toolbarStyles.Toolbar}>
      <div>
        <DrawerToggle clicked={props.toggleDrawer}/>
      </div>
      <div>
        <Logo height="80%"/>
      </div>
      <nav className={toolbarStyles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;
