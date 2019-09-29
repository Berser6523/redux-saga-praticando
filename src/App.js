import React from 'react'

// Redux
import { Provider } from 'react-redux'

import Route from './routes'
import store from './store/store'

export default () => {
  return(
    <Provider store={store}>
      <Route />
    </Provider>
  )
}
