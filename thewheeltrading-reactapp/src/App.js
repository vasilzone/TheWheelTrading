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

function App() {
  return (
    <div className='App bg-dark'>
       <Router>
      <header>
        <NavbarComp/>
      </header>
      <main className="bg-dark">
      <Container className="bg-dark">
      <Row>       
        <Col className="bg-dark text-light" sm={12}> 
        <Routes>
          <Route path="/home" element={<Home />}>        
          </Route>
          <Route path="/Link" element={<LinkPage />}>           
          </Route>       
    </Routes>
    </Col>
      </Row>   
    </Container>  
      </main>
      </Router>
      <footer className='bg-dark'>        
          <Container className='py-5 my-5 px-4 bg-dark'>
            <p className='text-center text-white'>Copyright $copy; Your Website 2022</p>
          </Container>
      </footer>
    </div>
  );
}

export default App;
