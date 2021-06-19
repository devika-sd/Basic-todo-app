import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Viewtodo from './components/Viewtodo';
import {BrowserRouter as Router,Route} from 'react-router-dom';


import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = { todos: []};
}
componentDidMount() {
  this.updatefunc();    
}
updatetodos()
{
  this.updatefunc(); 
}
updatefunc()
{
  fetch('http://localhost:3004/todos')
        .then(res => res.json())
        .then(data => {
            this.setState({ todos: data })
            console.log(this.state.todos)
        }); 
}

  render() {
    return (
      <>
      {/* <Router>
        <Route path="/">
        
        </Route>
        <Route path="/">
          
        </Route>
      </Router> */}
      <Todo makeupdate={this.updatetodos.bind(this)}></Todo>
      <Viewtodo delupdate={this.updatetodos.bind(this)} listvalue={this.state.todos}></Viewtodo>
      </>
    )
  }
}
