import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuListItems} from "./MenuListItems";


export function CardMenu() {

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon/>
          </button>
        }
      >
        <div className={styles.menuDropdown}>
          <MenuListItems  postId="1234"/>

          <button className={styles.menuDropdownClose}>Закрыть</button>

        </div>
      </Dropdown>
    </div>
  );
}
