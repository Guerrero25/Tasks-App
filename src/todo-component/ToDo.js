import React, {Component} from 'react'
import './ToDo.css'

class ToDo extends Component {
  constructor () {
    super()
    this.state = {
      tasks: ''
    }
  }

  componentDidMount () {
    this.setState({
      tasks: this.props.tasks.map(task => <li key={task.id} className={'task-item ' + this.props.type} >{task}</li>)
    })
  }

  render () {
    return (
      <div className='container'>
        <h2 className='title'>{this.props.title}</h2>
        <ul className='task-list'>
          {this.state.tasks}
        </ul>
      </div>
    )
  }
}

export default ToDo
