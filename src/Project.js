import React from 'react';
import './Project.css'


const ColoredLine = ({ color }) => (
    <hr
        style={{
            backgroundColor: color,
            height: 2
        }}
    />
);
const ListEngineers = props => {
    return (
        <div style={{ paddingBottom: 10 }}>
            <table className="table">
                {props.everyone.map((person, index) => {
                    return (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.rate}</td>
                            <td>{person.estimated_hours}</td>
                            <td>tbd</td>
                        </tr>

                    )
                })}
            </table>
        </div>
    )
}




class Project extends React.Component {

    state = {
        name: "George",
        allEngineers: [
            { name: "Henry", rate: 68.25, estimated_hours: 30 },
            { name: "Terri", rate: 60, estimated_hours: 32 }
        ]
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
                    <ListEngineers everyone={this.state.allEngineers} />
                    <div><button type="button">Add Person</button></div>
                    <br /><br />
                    <div><ColoredLine color="yellowgreen" /></div>

                    <div>{this.state.name}</div>

                </div>
            </div>



        );
    }
}
export default Project;



