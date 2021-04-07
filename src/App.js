import './styles/index.css'
import './styles/app.css'
import React from 'react'
import { BrowserRouter as Router,
         Route,
         Switch
        } from 'react-router-dom'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello React</h1>
      <Router>
          <Switch>
            <Route path='/' exact>
              <div>Hellow home</div>
            </Route>
            <Route path='/:slug' >
              <div>Hello post</div>
            </Route>
          </Switch>
      </Router>          
    </div>
  </Provider>
    
    
)


export default App