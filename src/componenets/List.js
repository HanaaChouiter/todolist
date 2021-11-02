import React from 'react';

class List extends React.Component {
    render() {
        const { description, status} = this.props.task
        const {removeTask, index} = this.props
        // console.log("props",this.props)
        return (
            <div>
                <h2>List</h2>
                <div className="d-flex justify-content-between w-50 border border-primary rounded">
                    <div>
                        <p className="p-2">{description}</p>
                    </div>
                    <div>
                        <p className="p-2">{status}</p>
                    </div>
                    <div className="p-2">
                       <button className="btn btn-outline-danger " type="button" id={index} onClick={removeTask}>Supprimer</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;