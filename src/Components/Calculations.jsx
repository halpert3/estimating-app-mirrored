import NumberFormat from 'react-number-format';
import React from 'react';

const Calculations = props => {

    let newArr = [];
    for (let i = 0; i < props.everyone.length; i++) {
        newArr.push(props.everyone[i].rate * props.everyone[i].estimated_hours);
        console.log(newArr)
    }
    let sum = newArr.reduce((total, current) => total + current);

    return (

        <div style={{ paddingBottom: 10 }}>
            <table className="table">
                <tbody>
                    <tr style={{ fontWeight: "bold" }}>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td className="right-align">
                            <NumberFormat value={sum} displayType={'text'}
                                thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Calculations;