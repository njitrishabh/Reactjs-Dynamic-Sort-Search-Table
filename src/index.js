import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Pubmed from './components/Pubmed';
import Notfound from './components/notfound';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">crossRef</Link>
                </li>
                <li>
                    <Link to="/pubmed">pubmed</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/pubmed" component={Pubmed} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
