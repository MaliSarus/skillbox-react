import React from "react";


const withKey = (key ?: string) =>
  <E, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        // @ts-ignore
        {
          ...props,
          key: key ?
            props[key as keyof E]
            : index
        },
        []
      )


export const withIdKey = withKey('id');
export const withIndexKey = withKey();

export const pickFromSynteticEvent = <T extends HTMLElement>() => (
  <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key])
)

export const getValue = pickFromSynteticEvent<HTMLInputElement>()('value')
export const getChecked = pickFromSynteticEvent<HTMLInputElement>()('checked')

export const preventDefault = <T extends (e: any) => void>(fn: T) =>
  <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault()
    fn(e)
  }


export const stopPropagation = <T extends (e: any) => void>(fn: T) =>
  <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation()
    fn(e)
  }

export const assoc = <K extends string, T>(key: K, value: T) =>
  <O extends object>(obj: O) => ({
    ...obj,
    [key]: value
  }) as K extends keyof O ? (Omit<O,K> & Record<K, T>) : (O & Record<K,T>)


export const generateRandomString = () => Math.random().toString(36).substring(2, 15)
export const generateId = <O extends object>(obj: O) => assignRandomId(obj)
export const assignRandomId = assoc('id', generateRandomString())

export const merge = <O extends object>(obj1: O) => <K extends object>(obj2: K) => (
  {
    ...obj1,
    ...obj2
  }
)

export function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

export function isEqual<T>(left: T){
  return <E extends T>(right: E) => left === right
}

export function joinWithSpace<T>(item: T){
  return <O extends Array<T> | T | undefined>(items: O) => {
    const result = Array.isArray(items) ? [...items,item] : [items, item]
    return result.join(' ')
  }
}