import React from 'react';
import styles from './userblock.scss';
import {AccountIcon} from "../../../Icons";
import {Break} from "../../../Break";
import {Text} from "../../../Text";
import {EColors} from "../../../../types/types";

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=xUPvgrpAm1l5m_16q7ks6A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"
      className={styles.userBox}
    >
      <span className={styles.avatarBox}>
        {
          avatarSrc ?
            <img src={avatarSrc} alt="user-avatar" className={styles.avatarImage}/>
            : <AccountIcon/>
        }
      </span>
      <span className={styles.username}>
        <Break size={12}/>
        <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
      </span>
    </a>
  );
}
