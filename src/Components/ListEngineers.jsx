import NumberFormat from 'react-number-format';
import React from 'react';

const ListEngineers = props => {
    return (
        <div style={{ paddingBottom: 10 }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Estimated Hours</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.everyone.map((person, index) => {
                        let total = person.rate * person.estimated_hours;
                        return (
                            <tr key={index}>
                                <td>{person.name}</td>
                                <td className="right-align">${Number(person.rate).toFixed(2)}/hr.</td>
                                <td className="right-align">{person.estimated_hours}</td>
                                <td className="right-align"><NumberFormat value={total} displayType={'text'}
                                    thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default ListEngineers;