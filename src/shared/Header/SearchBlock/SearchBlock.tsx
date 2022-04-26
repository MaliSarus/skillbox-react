import React, {useContext} from 'react';
import styles from './searchblock.scss';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../../context/userContext";

export function SearchBlock() {
  const {name} = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock username={name}/>
    </div>
  );
}
