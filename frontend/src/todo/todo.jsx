import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

class Todo extends Component {
  
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    
  }

  render(){
    return (
      <div>
        <PageHeader name='Tasks' small='Registration' />
        <TodoForm handleAdd={this.handleAdd} description={this.state.description}></TodoForm>
        <TodoList></TodoList>
      </div>
    )
  }
}

export default Todo
