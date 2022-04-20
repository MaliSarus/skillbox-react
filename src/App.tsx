import {hot} from "react-hot-loader/root";
import React from 'react'
import {Layout} from './shared/Layout/Layout'
import {Header} from './shared/Header/Header'
import './shared/main.global.scss'
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {useToken} from "./hooks/useToken";


function AppConponent() {
  const [token] = useToken()
  return (
    <Layout>
      <Header token={token}/>
      <Content>
        <CardList/>
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppConponent/>)