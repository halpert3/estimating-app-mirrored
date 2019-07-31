import React from 'react';
import './Project.css';
import ListEngineers from './Components/ListEngineers';
import Calculations from './Components/Calculations';


const ColoredLine = ({ color }) => (<
    hr style={
        {
            backgroundColor: color,
            height: 2
        }
    }
/>
);

class Project extends React.Component {

    state = {
        name: "George",
        allEngineers: [
            { name: "Henry", rate: 68.25, estimated_hours: 30 },
            { name: "Terri", rate: 60, estimated_hours: 32 }
        ],
        test_array: ["test0", "test1"]
    }

    render() {
        return (
            <div className="grid-container">
                <div className="middle-col">
                    <h1>Quote Builder</h1>
                    <ListEngineers everyone={this.state.allEngineers} />
                    <Calculations everyone={this.state.allEngineers} />
                    <div>
                        <button type="button">Add Person</button>
                    </div>
                    <br /> < br />
                    { /* *************** end of chart  ******************/}
                    <div>
                        <ColoredLine color="purple" />
                    </div>


                </div>
            </div >

        );
    }
}
export default Project;