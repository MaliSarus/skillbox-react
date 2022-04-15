import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateRandomString, joinWithSpace} from "../../../../utils/helpers";

const withDropdownButtonStyle = joinWithSpace(styles.dropdownButton)
// const dropdownButtonStyles = <S extends string>(style: S) => [style, ].join(' ')


const DROPDOWN_LIST = [
  {
    text: 'Комментарии',
    id: generateRandomString(),
    Tag: "button" as const,
    className: withDropdownButtonStyle(styles.commentsDropdown)
  },
  {
    text: `Поделиться`,
    id: generateRandomString(),
    Tag: "button" as const,
    className: withDropdownButtonStyle(styles.shareDropdown)
  },
  {
    text: 'Скрыть',
    id: generateRandomString(),
    Tag: "button" as const,
    className: withDropdownButtonStyle(styles.hideDropdown)
  },
  {
    text: 'Сохранить',
    id: generateRandomString(),
    Tag: "button" as const,
    className: withDropdownButtonStyle(styles.saveDropdown)
  },
  {
    text: 'Пожаловаться',
    id: generateRandomString(),
    Tag: "button" as const,
    className: withDropdownButtonStyle(styles.alertDropdown)
  },
  {
    text: 'Закрыть',
    id: generateRandomString(),
    Tag: "button" as const,
    className: withDropdownButtonStyle(styles.closeDropdown),
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
