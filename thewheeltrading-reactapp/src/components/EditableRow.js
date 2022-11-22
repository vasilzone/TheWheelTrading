import React from 'react';

const EditableRow = ({editableContact, handleChange}) => {   

    return (                
       <tr>
        <td name='id'>{editableContact.id}</td>
        <td  sm={1}><input type="text" required="required" name='ticker'  readonly value={editableContact.ticker}></input></td>
        <td><input type="text" name='openDate' onChange={(event)=> handleChange(event)} value={editableContact.openDate}></input></td>
        <td><input type="text" required="required" name='expirationDate' value={editableContact.expirationDate}></input></td>
        <td><input type="text" required="required" name='callOrPut' value={editableContact.callOrPut}></input></td>
        <td><input type="text" required="required" name='buyOrSell' value={editableContact.buyOrSell}></input></td>
        <td><input type="text" required="required" name='strikePrice' value={editableContact.strikePrice}></input></td>
        <td><input type="text" required="required" name='premium' value={editableContact.premium}></input></td>
        <td><input type="text" required="required" name='numberOfContracts' value={editableContact.numberOfContracts}></input></td>
        <td><input type="text" required="required" name='fees' value={editableContact.fees}></input></td>
        <td><input type="text" required="required" name='assigned' value={editableContact.assigned}></input></td>
        <td><input type="text" required="required" name='daysHeld' value={editableContact.daysHeld}></input></td>
        <td><input type="text" required="required" name='profit' value={editableContact.profit}></input></td>
        <td><input type="text" required="required" name='cashReserverd' value={editableContact.cashReserverd}></input></td>
        <td><input type="text" required="required" name='annualizedRoR' value={editableContact.annualizedRoR}></input></td>
        <td><input type="text" required="required" name='weeklyRor' value={editableContact.weeklyRor}></input></td>
       </tr>
    );
};

export default EditableRow;