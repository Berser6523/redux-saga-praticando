import React from 'react'

// Redux
import { Provider } from 'react-redux'

import Route from './routes'
import store from './store/store'
import './styles/css/app.css'


export default () => {
  return(
    <Provider store={store}>
      <Route />
    </Provider>
  )
}
