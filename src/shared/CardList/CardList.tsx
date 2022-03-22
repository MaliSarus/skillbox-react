import React from 'react';
import styles from './cardlist.scss';
import {Card} from "./Card";

export function CardList() {
    return (
        <ul className={styles.cardsList}>
          <li>
            <Card/>
          </li>
        </ul>
    );
}
