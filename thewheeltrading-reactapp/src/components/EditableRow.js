import React from 'react';

const EditableRow = (editableContact) => {
    return (                
       <tr>
        <td><input type="text" required="required" name='id' value={editableContact.editableContact.id}></input></td>
        <td><input type="text" required="required" name='firstName' value={editableContact.editableContact.firstName}></input></td>
        <td><input type="text" required="required" name='lastName' value={editableContact.editableContact.lastName}></input></td>
        <td><input type="text" required="required" name='username' value={editableContact.editableContact.userName}></input></td>
       </tr>
    );
};

export default EditableRow;