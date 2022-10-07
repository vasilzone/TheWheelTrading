import React from 'react';

const ReadOnlyRow = ({contact, handleClick }) => {
    return (
        <tr>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "id")}>{contact.id}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "firstName")}>{contact.firstName}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "lastName")}>{contact.lastName}</td>
        <td onDoubleClick={(event)=> handleClick(event, contact.id, "username")}>{contact.username}</td>
      </tr>
    );
};

export default ReadOnlyRow;