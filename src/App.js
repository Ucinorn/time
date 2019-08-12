import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import logo from './logo.svg';
//import './App.css';
import Timebar from './components/timebar.js';
import Stats from './components/stats.js';
import Actions from './components/actions.js';
import Queue from './components/queue.js';

class App extends Component {
  render() {
    return (
      <Container className="App">
				  <header className="App-header">
					<Row>
						<Col>
							About Time
						</Col>
						<Col>
							<Timebar/>
						</Col>
					</Row>
					<Row>
						<Col>
							<h4>Stats</h4>
							<Stats/>
						</Col>
						<Col>
							<h4>Actions</h4>
							<Actions/>
						</Col>
						<Col>
							<h4>Queue</h4>
							<Queue/>
						</Col>
					</Row>
        </header>
      </Container>
    );
  }
}

export default App;
