import React from 'react';
import logoImage from '../../assets/images/burger-logo.png';
import logoStyles from './Logo.css';

const logo = (props) => {
  return (
    <div className={logoStyles.Logo} style={{height: props.height}}>
      <img src={logoImage} alt="MyBurger" />
    </div>
  )
}

export default logo;
