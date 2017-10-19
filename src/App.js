import React, { Component } from 'react'
import ToDo from './todo-component/ToDo'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      toDo: ['Hacer deposito', 'Comprar la chocolatina que le debo a mi reina por la apuesta', 'Botar la basura'],
      Completeds: ['Hacer la tarea', 'Ir a la universidad']
    }
  }
  render () {
    return (
      <div className='tasks-app'>
        <ToDo
          tasks={this.state.toDo}
          title='Tareas Por Hacer'
          type='waiting'
        />
        <ToDo
          tasks={this.state.Completeds}
          title='Tareas Terminadas'
          type='finish'
        />
      </div>
    )
  }
}

export default App
