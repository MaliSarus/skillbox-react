import React from 'react';
import styles from './text.scss';
import {EColors, TSizes} from "../../types/types";
import classNames from "classnames";


interface ITextProps {
  Tag?: 'span' | 'h2' | 'h3' | 'h4' | 'p' | 'div',
  children: React.ReactNode;
  size: TSizes,
  mobileSize?: TSizes,
  tabletSize?: TSizes,
  desktopSize?: TSizes,
  color?: EColors,
  bold?: boolean

}

export function Text(props: ITextProps) {
  const {
    Tag = 'span',
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColors.black,
    bold = false,
  } = props
  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    {[styles.bold]: bold },
    styles[color]
  )
  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
}
