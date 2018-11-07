import React from 'react';
import backdropStyles from './Backdrop.css';

const backDrop = (props) => {
  return (props.show ? <div className={backdropStyles.BackDrop} onClick={props.clicked}></div> : null);
}

export default backDrop;
