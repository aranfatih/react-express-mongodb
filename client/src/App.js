import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Profile from './profile/profile';

export default class App extends React.Component {
  render() {
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:username" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
  }
}
