import {hot} from "react-hot-loader/root";
import React from 'react'
import {Layout} from './shared/Layout/Layout'
import {Header} from './shared/Header/Header'
import './shared/main.global.scss'
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./context/tokenContext";
import {UserContextProvider} from "./context/userContext";
import {PostsContextProvider} from "./context/postsContext";


function AppConponent() {
  const [token] = useToken()
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header/>
            <Content>
              <CardList/>
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppConponent/>)
