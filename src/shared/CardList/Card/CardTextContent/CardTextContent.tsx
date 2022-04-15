import React from 'react';
import styles from './cardtextcontent.scss';
interface ICardTextContentProps{
  content: {
    user: {
      avatar: string,
      name: string,
      url: string,
    },
    date: string,
    title: string,
    postLink: string,
  }
}

export function CardTextContent(props: ICardTextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <div className={styles.avatar}>
            <img
              src={props.content.user.avatar}
              alt="avatar"/>
          </div>
          <a href={props.content.user.url} className={styles.username}>{props.content.user.name}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
            {props.content.date} назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href={props.content.postLink} className={styles.postLink}>
          {props.content.title}
        </a>
      </h2>
    </div>
  );
}
