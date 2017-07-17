import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

class Todo extends Component {
  render(){
    return (
      <div>
        <PageHeader name='Tasks' small='New Task' />
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    )
  }
}

export default Todo
