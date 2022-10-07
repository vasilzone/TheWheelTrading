import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import useState from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Api from '../helper/Api'

class TableEditable extends React.Component {
   

    constructor(props){ 
        super(props)
        debugger
     
            var api = new Api()
            api.getUserList().then((response) => {
              debugger; //setPosts(response)
            });
        
        // Set initial state        
        this.state = { contacts: [
            {
                "id":"1",
                "firstName":"Mark",
                "lastName":"Otto",
                "username":"@mdo"
            },
            {
                "id":"2",
                "firstName":"Jacob",
                "lastName":"Thornton",
                "username":"@fat"
            },
            {
                "id":"3",
                "firstName":"arry the Bird",
                "lastName":"Larry 2",
                "username":"@twitter"
            }
        ],       
        editContactId: null,
        editContact: {
            id:"",
            firstName:"",
            lastName:"",
            userName:""
        }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleSubmit(event) {      
        debugger;
        var array = this.state.contacts.map(a => parseInt(a.id));
        var maxId = Math.max(...array);

        var nextId = ++maxId;

        this.setState(previousState => ({
            contacts: [...previousState.contacts, {"id":nextId,
                                            "firstName":'',
                                            "lastName":'',
                                            "userName":'',}],
                                            editContactId: this.state.id,
                                            editContact:{ id:this.state.id,
                                                firstName: '',
                                                lastName: '',
                                                username: ''
                                            }
                                            
        }));        
        event.preventDefault();
      }

      handleInputChange(event) {
        const target = event.target;     
        const name = target.name;
        const value = target.value;
        this.setState({
        [name]: value
      });      
    }

        
    handleClick(event,contactId,field) {     
        var currentRecord = this.state.contacts.find(element => element.id === contactId);
        debugger
        this.setState({
            editContactId: contactId,
            editContact:{ id:currentRecord.id,
                firstName: currentRecord.firstName,
                lastName: currentRecord.lastName,
                username: currentRecord.username
            }
          });
        event.preventDefault();
      }

    render() {
        return (
            <div>
                <form>
               <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
            this.state.contacts.map((contact)=>
            <Fragment>
                {this.state.editContactId===contact.id? <EditableRow editableContact = { this.state.editContact } />:<ReadOnlyRow handleClick={this.handleClick} contact={contact}/> }            
            </Fragment>
            ) 
        }   
      </tbody>
    </Table> 
    <button type="submit" class="btn btn-dark" onClick={this.handleSubmit}>Submit</button>
    </form>   
            </div>
        );
    }
}

export default TableEditable;