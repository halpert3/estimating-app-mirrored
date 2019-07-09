import React from 'react';
import './Project.css'

class Project extends React.Component {
    state = {
        name: "Henry",
        rate: 68.25,
        estimated_hours: 30
    }
    render() {
        return (
            <div className="grid-container">
                <div className="middle-col">
                    <h1>Quote Builder</h1>
                    <div className="header-container">
                        <div id="headers">Name</div>
                        <div id="headers">Rate</div>
                        <div id="headers">Estimated Hours</div>
                        <div id="headers">Total</div>
                    </div>
                    <div className="chart-container">
                        <div>{this.state.name}</div>
                        <div>${this.state.rate}</div>
                        <div>{this.state.estimated_hours}</div>
                        <div>{this.state.estimated_hours * this.state.rate}</div>
                    </div>
                    <p>Name 2</p>
                    <p><button type="button">Add Person</button></p>
                </div>
            </div >
        );
    }
}
export default Project;
