import React from "react";
import {usePostsData} from "../hooks/usePostsData";

export const postsContext = React.createContext({})

interface IPostsContextProps {
  children: React.ReactNode
}

export function PostsContextProvider({children}: IPostsContextProps) {
  const [data] = usePostsData()

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}
