import React, { Component } from 'react'
import ToDo from './todo-component/ToDo'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      toDo: [],
      Completeds: []
    }

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask (e) {
    e.preventDefault()
    let input = document.getElementById('new_task')
    let todo = this.state.toDo

    if (input.value !== '') {
      const ntask = {
        id: todo.length,
        content: input.value
      }
      todo.push(ntask)
      this.setState({
        toDo: todo
      })
      input.value = ''
    }
  }
  render () {
    return (
      <div className='tasks-app'>
        <section className='tasks-app__todo'>
          <ToDo
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
