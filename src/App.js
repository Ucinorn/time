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
							<h2>Stats</h2>
							<Stats/>
						</Col>
						<Col>
							<h2>Actions</h2>
							<Actions/>
						</Col>
						<Col>
							<h2>Queue</h2>
							<Queue/>
						</Col>
					</Row>
        </header>
      </Container>
    );
  }
}

export default App;
