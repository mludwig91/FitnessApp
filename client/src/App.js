import './App.css';
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Visitors from './components/layout/Visitors';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Alert from './components/layout/Alert'
import { Provider } from 'react-redux';
import myStore from './store';

//<Fragment> allows you to return multiple Components
const App = () =>{
return (
    <Provider store={myStore}>
    <Router> 
        <Fragment>
        <Navbar/>
            <Route exact path="/" component={Visitors}/>
            <section className="container">
             <Alert/>   
            <Switch>
                <Route path="/registration" component={Registration}></Route>
                <Route path="/login" component={Login}></Route>
            </Switch>
            </section>
        </Fragment>
    </Router>
    </Provider>
    )
}
export default App;


