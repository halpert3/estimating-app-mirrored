import React from 'react';
import './Project.css';
import NumberFormat from 'react-number-format';
import ListEngineers from './Components/ListEngineers';


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
        ]
    }

    render() {
        return (

            <div className="grid-container">
                <div className="middle-col">
                    <h1 > Quote Builder </h1> <ListEngineers everyone={this.state.allEngineers} />
                    <div> < button type="button" > Add Person </button></div>
                    <br /> < br />
                    <div> < ColoredLine color="purple" /> </div>
                    <div> {this.state.name} </div>
                    <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                </div>
            </div>



        );
    }
}
export default Project;