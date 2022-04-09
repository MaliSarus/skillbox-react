import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateRandomString} from "../../../../utils/helpers";

const DROPDOWN_LIST = [
  {
    text: 'Комментарии',
    id: generateRandomString(),
    Tag: "button" as const,
    className: styles.commentsDropdown
  },
  {
    text: `Поделиться`,
    id: generateRandomString(),
    Tag: "button" as const,
    className: styles.shareDropdown
  },
  {
    text: 'Скрыть',
    id: generateRandomString(),
    Tag: "button" as const,
    className: styles.hideDropdown
  },
  {
    text: 'Сохранить',
    id: generateRandomString(),
    Tag: "button" as const,
    className: styles.saveDropdown
  },
  {
    text: 'Пожаловаться',
    id: generateRandomString(),
    Tag: "button" as const,
    className: styles.alertDropdown
  },
  {
    text: 'Закрыть',
    id: generateRandomString(),
    Tag: "button" as const,
    className: styles.closeDropdown,
  }
]

export function CardMenu() {
  const [dropdownList, changeDropdownList] = React.useState(DROPDOWN_LIST)

  return (
    <div className={styles.menu}>

      <Dropdown
        button={
          <button className={styles.menuButton}>
            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
              <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
              <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
            </svg>
          </button>
        }
      >
        <GenericList list={dropdownList}/>
      </Dropdown>
    </div>
  );
}
