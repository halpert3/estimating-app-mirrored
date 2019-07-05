import React from 'react';
import './Project.css'

class Project extends React.Component {
    state = {
        name: "Henry",
        rate: "$68.21",
        estimated_hours: "30"
    }
    render() {
        return (
            <div className="grid-container">
                <div className="middle-col">
                    <h1>Quote Builder</h1>
                    <div className="chart-container">
                        <div>{this.state.name}</div>
                        <div>{this.state.rate}</div>
                        <div>{this.state.estimated_hours}</div>
                    </div>
                    <p>Name 2</p>
                    <p><button type="button">Add Person</button></p>
                </div>
            </div >
        );
    }
}
export default Project;
