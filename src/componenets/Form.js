import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component {
    constructor(){
        super()

        this.state = {
            task: ""
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskDescriptionChange(e){
        // console.log(e.target.value)
        this.setState({ task: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        // this.setState({ task: ""})
        this.props.addTask(this.state.task)
    }

    render() {
        // console.log("render task",this.state.task)
        // console.log("props", this.props)
        return (
            <>
            <h1>To do list</h1>
            <div className="d-flex">
                <form onSubmit={this.handleSubmit} >
                <div className="row">
                <div className="col-8">
                <input className="form-control" type="text" onChange={this.handleTaskDescriptionChange} />
                </div>
                <div className="col-4">
                <button className="btn btn-primary" type="submit">Ajouter</button>
               </div>
               </div>
                </form> 
            </div>
            </>
        );
    }
}

export default Form;