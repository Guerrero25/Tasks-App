import React, {Component} from 'react'
import './ToDo.css'

class ToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount () {
    let tasks = this.listTasks(this.props.tasks)
    this.setState({
      tasks: tasks
    })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      let listTasks = this.listTasks(nextProps.tasks)
      this.setState({
        tasks: listTasks
      })
    }
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

  // Helper for build the list's tasks
  listTasks (tasks) {
    return tasks.map(task => {
      return <li key={task.id} className={'task-item ' + this.props.type} >{task.content}</li>
    })
  }
}

export default ToDo
