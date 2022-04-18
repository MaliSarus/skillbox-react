import React from 'react';
import styles from './break.scss';
import {TBreakSizes} from "../../types/types";
import classNames from "classnames";

interface IBreakProps {
  size: TBreakSizes,
  mobileSize?: TBreakSizes,
  tabletSize?: TBreakSizes,
  desktopSize?: TBreakSizes,
  inline?: boolean,
  top?: boolean,
}

export function Break(props: IBreakProps) {
  const {
    size,
    inline = false,
    top = false,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props
  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top },
      )}
    />
  );
}
