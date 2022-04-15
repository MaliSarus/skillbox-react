import {hot} from "react-hot-loader/root";
import * as React from 'react'
import {Layout} from './shared/Layout/Layout'
import {Header} from './shared/Header/Header'
import './shared/main.global.scss'
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";

function AppConponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardList/>
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppConponent/>)