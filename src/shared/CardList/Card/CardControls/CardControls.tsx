import React from 'react';
import styles from './cardcontrols.scss';

interface ICardControlsProps{
  children?:React.ReactNode
}

export function CardControls({children}:ICardControlsProps) {
  return (
    <div className={styles.controls}>
      {children}
    </div>
  );
}
