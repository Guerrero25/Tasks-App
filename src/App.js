import React, { Component } from 'react'
import ToDo from './todo-component/ToDo'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      toDo: [],
      Completeds: [],
      id: 0
    }

    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleCompleteTask = this.handleCompleteTask.bind(this)
  }

  handleAddTask (e) {
    e.preventDefault()
    let input = document.getElementById('new_task').value
    let todo = this.state.toDo
    let id = this.state.id

    if (input !== '') {
      
      const ntask = {
        id: id,
        content: input
      }
      todo.push(ntask)
      id++
      this.setState({
        toDo: todo,
        id: id
      })
      document.getElementById('new_task').value = ''
    }
  }
  handleCompleteTask (e) {
    e.preventDefault()
    let todo = this.state.toDo
    let completed = this.state.Completeds
    let task = e.target.id
    let completeTask = todo.find( td => {
      return td.id == task
    })
    
    completed.push(completeTask)
    todo = todo.filter( t => {
      return t !== completeTask
    })
    this.setState({
      toDo: todo,
      Completeds: completed
    })
  }
  render () {
    return (
      <div className='tasks-app'>
        <section className='tasks-app__todo'>
          <ToDo
            onClick={this.handleCompleteTask}
            tasks={this.state.toDo}
            title='Tasks To Do'
            type='waiting'
          />
          <div className='todo__add'>
            <form action='#' className='form__add'>
              <input id='new_task' type='text' className='text__form__add' />
              <input onClick={this.handleAddTask} type='submit' className='submit__form__add' value='new task' />
            </form>
          </div>
        </section>
        <section className='tasks-app__completed'>
          <ToDo
            tasks={this.state.Completeds}
            title='Task Completed'
            type='finish'
          />
        </section>
      </div>
    )
  }
}

export default App
