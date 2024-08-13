import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'

import {store} from "./app/store.js"

function App() {
  
  return (
    <Provider store={store}>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      </Provider>
  )
}

export default App