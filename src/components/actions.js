import React, { Component } from 'react';
import { view, store } from 'react-easy-state'
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import game from '../store/store.js';
import loop from '../game/loop.js';

class Actions extends Component {

			constructor (props) {
		    super(props);
				this.localState = store({ looping: false })
		  }


  render() {
    return (
      <Row>
				<Col>
					<Button color="primary" onClick={() => this.startLoop()} disabled={ this.localState.looping}>
						Start
					</Button>
				</Col>
			</Row>
    );
  }
}

export default view(Actions);
