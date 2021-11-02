import React from "react"
import Form from "./componenets/Form";
import List from "./componenets/List";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      tasks: []
      
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addTask(str){
    // console.log("App addTask str ",str)
    let task = {
      description: str,
      status:"to do"
    }
    this.setState({ tasks: [...this.state.tasks,task]}) 
  }

  deleteTask(task){
    console.log(task.target.id)
    this.state.tasks.splice(task.target.id, 1)
    this.setState({ tasks: this.state.tasks})
  }



  render() {
    // console.log("App", this.state.tasks)
    return (
      <div className="container p-3">
        <Form addTask={this.addTask}/>
        {this.state.tasks.map((task,i) => (
            <List task={task} removeTask={this.deleteTask} index={i}/>
          ))}
        {/* <List tasks={this.state.tasks}/> */}
      </div>
    );
  }
}

export default App;
