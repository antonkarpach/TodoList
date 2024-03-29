import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import ListTodo from "./components/ListTodo";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Todos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={ListTodo} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        );
    }
}

export default App;
