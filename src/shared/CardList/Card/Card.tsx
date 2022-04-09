import React from 'react';
import styles from './card.scss';
import {CardTextContent} from "./CardTextContent";
import {CardMenu} from "./CardMenu";
import {CardControls} from "./CardControls";
import {CardActions} from "./CardActions";

const textContent = {
  user: {
    avatar: 'https://user-life.com/uploads/posts/2020-03/1584366922_1.png',
    name: 'Дмитрий Гришин',
    url: '#new-user'
  },
  date: '4 часа',
  title: 'Следует отметить, что новая модель организационоой деятельности стоит...',
  postLink: '#post-link'
}

export function Card() {

  return (
    <div className={styles.card}>
      <CardTextContent content={textContent}/>
      <div className={styles.preview}>
        <img src="https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg" className={styles.previewImg} alt=""/>
      </div>
      <CardMenu/>
      <CardControls>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
            </svg>
          </button>
          <span className={styles.karmaValue}>234</span>
          <button className={styles.down}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
            </svg>
          </button>
        </div>
        <button className={styles.commentsButton}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
          </svg>
          <span className={styles.commentsNumber}>13</span>
        </button>
        <CardActions save-btn={true} share-btn={true}/>
      </CardControls>
    </div>
  );
}
