import React from 'react';
import styles from './menulistitems.scss';
import {AlertIcon, CommentsIcon, HideIcon, SaveIcon, ShareIcon} from "../../../../Icons";
import {Icon} from "../../../../Icon";

interface IMenuItemsListProps {
  postId: string | number
}

export function MenuListItems({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <button onClick={()=>console.log(postId)}>
          <Icon className={styles.menuItemIcon} name="comments" size={16}/>
          Комментарии
        </button>
      </li>
      <li className={styles.menuItem}>
        <button>
          <Icon className={styles.menuItemIcon} name="share" size={16}/>
          Поделиться
        </button>
      </li>
      <li className={styles.menuItem}>
        <button>
          <Icon className={styles.menuItemIcon} name="hide" size={16}/>
          Скрыть
        </button>
      </li>
      <li className={styles.menuItem}>
        <button>
          <Icon className={styles.menuItemIcon} name="save" size={16}/>
          Сохранить
        </button>
      </li>
      <li className={styles.menuItem}>
        <button>
          <Icon className={styles.menuItemIcon} name="alert" size={16}/>
          Пожаловаться
        </button>
      </li>
    </ul>
  );
}
