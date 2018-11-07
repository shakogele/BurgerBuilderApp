import React from 'react';
import buildControlStyles from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={buildControlStyles.BuildControl}>
      <div className={buildControl.Label}>{props.label}</div>
      <button
        className={buildControlStyles.Less}
        onClick={props.remove}
        disabled={props.disabled}>
        Less
      </button>
      <button
        className={buildControlStyles.More}
        onClick={props.add}>
        More
      </button>
    </div>
  );
}

export default buildControl;
