import React, {useState} from 'react';
import styles from './icon.scss';
import {EIcons} from "../../types/types";
import * as components from "../Icons";
import classNames from 'classnames'


interface IIconProps {
  name: EIcons,
  size: number,
  className?: string,
}

export function Icon({size, name, className}: IIconProps) {
  const IconName = name.charAt(0).toUpperCase() + name.slice(1) + 'Icon';
  // @ts-ignore
  const RenderedIcon = components[IconName];
  const classes = classNames(
    styles.icon,
    className
  )
  return (
    <div
      className={classes}
      style={{width: `${size}px`, height: `${size}px`}}
    >
      <RenderedIcon/>
    </div>
  );
}
