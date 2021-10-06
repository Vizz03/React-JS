import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUser from './components/ListUser';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListUser}></Route>
                          <Route path = "/users" component = {ListUser}></Route>
                          <Route path = "/add-user/:id" component = {CreateUser}></Route>
                          <Route path = "/view-user/:id" component = {ViewUser}></Route>
                          <Route path = "/update-user/:id" component = {UpdateUser}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
