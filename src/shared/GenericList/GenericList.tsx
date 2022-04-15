import React from 'react';
import styles from './genericlist.scss';
import {joinWithSpace} from "../../utils/helpers";

const withListItemStyle = joinWithSpace('list__item')

interface IItem {
  text: string;
  className?: string ;
  id: string;
  onClick?: (id: string) => void;
  Tag?: 'a' | 'button' | 'div';
  href ?: string
}

interface IGenericListProps {
  list: Array<IItem>
}

const  noop = () => {}

export function GenericList({list}: IGenericListProps) {
  return (
    <ul className="list">
      {list.map(({Tag='div', text, onClick=noop ,id, className, href})=>(
          <li
            className={withListItemStyle(className)}
            key={id}
          >
            <Tag
              onClick={() => onClick(id)}

              {...((Tag === 'a') ? {href} : {})}
            >
              {text}
            </Tag>
         </li>


      ))}
    </ul>
  );
}
