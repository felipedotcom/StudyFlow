import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorAdmin from './Autor';
import LivroAdmin from './Livro';
import Home from './Home';
import './index.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
      <App>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/autor" component={AutorAdmin}/>
                  <Route path="/livro" component={LivroAdmin}/>
              </Switch>
      </App>
  </Router>

), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
