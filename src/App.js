import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import './styles/app.css'
import React from 'react'
import { BrowserRouter as Router,
         Route,
         Switch
        } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home';
import store from './store'

const App = () => (
  <Provider store={store}>
    <div>
      <Router>
          <Switch>
            <Route path='/' exact>
              <Home />
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