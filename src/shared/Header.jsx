import * as React from 'react'
import { hot } from 'react-hot-loader/root'

function HeaderComponent(){
  return (
    <header>
      <h1>Заголовок из  React 123</h1>
    </header>
  )
}

export const Header = hot(HeaderComponent)