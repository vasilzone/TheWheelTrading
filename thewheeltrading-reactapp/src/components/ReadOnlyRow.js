import React from 'react';

const ReadOnlyRow = ({contact, handleClick }) => {
    return (
        <tr>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "id")}>{contact.id}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "ticker")}>{contact.ticker}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "openDate")}>{contact.openDate}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "expirationDate")}>{contact.expirationDate}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "callOrPut")}>{contact.callOrPut}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "buyOrSell")}>{contact.buyOrSell}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "strikePrice")}>{contact.strikePrice}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "premium")}>{contact.premium}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "numberOfContracts")}>{contact.numberOfContracts}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "fees")}>{contact.fees}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "assigned")}>{contact.assigned}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "daysHeld")}>{contact.daysHeld}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "profit")}>{contact.profit}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "cashReserverd")}>{contact.cashReserverd}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "annualizedRoR")}>{contact.annualizedRoR}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "weeklyRor")}>{contact.weeklyRor}</td>
      </tr>
    );
};

export default ReadOnlyRow;