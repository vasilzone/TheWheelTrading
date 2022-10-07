import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComp from './components/NavbarComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import LinkPage from './components/Link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapTable from './components/BootstrapTable/bootstrap-table';
import cellEditFactory from './components/BootstrapEditor';

function App() {
  return (
    <div className="App">
       <Router>
      <header>
        <NavbarComp/>
      </header>
      <main>
      <Container className="bg-dark">
      <Row>
        <Col sm={7}>sm=8</Col>
        <Col className="bg-dark text-light" sm={5}> 
        <Routes>
          <Route path="/home" element={<Home />}>        
          </Route>
          <Route path="/Link" element={<LinkPage />}>           
          </Route>       
    </Routes>
    </Col>
      </Row>
   
    </Container>
    <BootstrapTable  keyField="done"
  data={ products }
  columns={ columns }
  cellEdit={ cellEditFactory({ mode: 'click' }) }></BootstrapTable>
      </main>
      </Router>
      <footer className='py-5 my-5 bg-dark'>
          <Container className='px-4'>
            <p className='text-center text-white'>Copyright $copy; Your Website 2022</p>
          </Container>
      </footer>
    </div>
  );
}


const columns = [
   {
    dataField: 'done',
    text: 'Done'   
  }
]

const products = [
  {
   done: '1'   
 },{
  done: '2'   
 }
]

export default App;
