import React from 'react';
import styles from './cardlist.scss';
import {Card} from "./Card";
import {usePostsData} from "../../hooks/usePostsData";

export function CardList() {
  const [posts] = usePostsData()
  return (
        <ul className={styles.cardsList}>
          {
            posts.map(post =>(
              // @ts-ignore
              <li key={post.id}>
                <Card post={post}/>
              </li>
            ))
          }
        </ul>
    );
}
