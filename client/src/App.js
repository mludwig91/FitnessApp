import './App.css';
import React, { Fragment } from 'react'
// import { BrowserRouter as Router, Route, Switch } from react-router-dom;
import Navbar from './components/layout/Navbar'
import Visitors from './components/layout/Visitors';


const App = () =>
    <Fragment>
    <Navbar/>
    <Visitors/>
    </Fragment>
export default App;


