import React, { Component } from 'react';
import { view, store } from 'react-easy-state'
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import game from '../store/store.js';
import loop from '../game/loop.js';

class Timebar extends Component {

			constructor (props) {
		    super(props);
				this.localState = store({ looping: false })
		  }

		  startLoop() {
		    loop.startLoop();
				this.localState.looping = true;
		  }

			stopLoop() {
				loop.stopLoop();
				this.localState.looping = false;
			}

			reset() {
				loop.stopLoop();
				loop.resetTime();
			  loop.startLoop();
				this.localState.looping = true;
			}

  render() {
    return (
      <Row>
      	<Col>
					{game.gold} / {game.startingGold}
				</Col>
				<Col>
        <ButtonGroup>
					<Button color="primary" onClick={() => this.startLoop()} disabled={ this.localState.looping}>
						Start
					</Button>
					<Button color="primary" onClick={() => this.stopLoop()} disabled={ ! this.localState.looping}>
						Stop
					</Button>
					<Button color="primary" onClick={() => this.reset()} disabled={ ! this.localState.looping}>
						Reset
					</Button>
        </ButtonGroup>
				</Col>
			</Row>
    );
  }
}

export default view(Timebar);
