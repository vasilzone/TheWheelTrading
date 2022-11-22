import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import useState from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Api from '../helper/Api'

class TableEditable extends React.Component {   

    constructor(props){ 
        super(props)
     
          
        this.state = { contacts: [          
        ],       
        editContactId: null,
        editContact: {
            id:"",
            ticker:"",
            openDate:"",
            expirationDate:"",
            callOrPut:"",
            buyOrSell:"",
            strikePrice:"",
            premium:"",
            numberOfContracts:"",
            fees:"",
            assigned:"",
            daysHeld:"",
            profit:"",
            cashReserverd:"",
            annualizedRoR:"",
            weeklyRor:""
        }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {      
      
      var api = new Api()
      api.getUserList().then((response) => {
        debugger;
        this.setState(
          { contacts: response
          ,       
          editContactId: null,
          editContact: {
              id:"",
              ticker:"",
              openDate:"",
              expirationDate:"",
              callOrPut:"",
              buyOrSell:"",
              strikePrice:"",
              premium:"",
              numberOfContracts:"",
              fees:"",
              assigned:"",
              daysHeld:"",
              profit:"",
              cashReserverd:"",
              annualizedRoR:"",
              weeklyRor:""
          } })        
      });
   }
    
    handleSubmit(event) {      
        debugger;
        var array = this.state.contacts.map(a => parseInt(a.id));
        var maxId = Math.max(...array);

        var nextId = ++maxId;

        this.setState(previousState => ({
            contacts: [...previousState.contacts, {
                                            id:nextId,
                                            ticker:'',
                                            openDate:'',
                                            expirationDate:'',
                                            callOrPut:"",
                                            buyOrSell:"",
                                            strikePrice:"",
                                            premium:"",
                                            numberOfContracts:"",
                                            fees:"",
                                            assigned:"",
                                            daysHeld:"",
                                            profit:"",
                                            cashReserverd:"",
                                            annualizedRoR:"",
                                            weeklyRor:""
                                          }],
                                            editContactId: this.state.id,
                                            editContact:{ id:this.state.id,
                                                ticker: '',
                                                openDate: '',
                                                expirationDate: '',
                                                callOrPut:'',
                                                buyOrSell:"",
                                                strikePrice:"",
                                                premium:"",
                                                numberOfContracts:"",
                                                fees:"",
                                                assigned:"",
                                                daysHeld:"",
                                                profit:"",
                                                cashReserverd:"",
                                                annualizedRoR:"",
                                                weeklyRor:""
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

    handleChange (event) {

      debugger;
      var name = event.target.name;     

      this.setState({
        editContact :{ [name]:event.target.value}
      });
     
    };

        
    handleClick(event,contactId,field) {     
        var currentRecord = this.state.contacts.find(element => element.id === contactId);
        
        this.setState({
              editContactId: contactId,
              editContact:{ id:currentRecord.id,
              ticker: currentRecord.ticker,
              openDate: currentRecord.openDate,
              expirationDate: currentRecord.expirationDate,
              callOrPut: currentRecord.callOrPut,
              buyOrSell: currentRecord.buyOrSell,
              strikePrice: currentRecord.strikePrice,
              premium: currentRecord.premium,
              numberOfContracts: currentRecord.numberOfContracts,                    
              fees: currentRecord.fees,
              assigned: currentRecord.assigned,
              daysHeld: currentRecord.daysHeld,
              profit: currentRecord.profit,
              cashReserverd: currentRecord.cashReserverd,
              annualizedRoR: currentRecord.annualizedRoR,
              weeklyRor: currentRecord.weeklyRor
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
          <th>Ticker</th>
          <th>Open Date</th>
          <th>Expiration Date</th>
          <th>Call Or Put</th>        
          <th>Buy Or Sell</th>  
          <th>Strike Price</th>   
          <th>Premium</th>   
          <th>Number Of Contracts</th>       
          <th>Fees</th>     
          <th>Assigned</th>     
          <th>Days Held</th>     
          <th>Profit</th>     
          <th>Cash Reserverd</th>     
          <th>Annualized RoR</th>     
          <th>Weekly Ror</th>                        
        </tr>
      </thead>
      <tbody>
        {
            this.state.contacts.map((contact)=>
            <Fragment>
                {this.state.editContactId===contact.id? <EditableRow handleChange={this.handleChange} editableContact = { this.state.editContact } />:<ReadOnlyRow handleClick={this.handleClick} contact={contact}/> }            
            </Fragment>
            ) 
        }   
      </tbody>
    </Table> 
    <button type="submit" class="btn btn-dark" onClick={this.handleSubmit}>Add Row</button>
    </form>   
            </div>
        );
    }
}

export default TableEditable;