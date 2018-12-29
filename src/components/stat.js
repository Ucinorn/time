import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import store from '../store/store.js'

class Stat extends Component {
  render() {
		if (this.props.level < 1) {
			return <div/>
		}

	  return (
	      <Row>
					<Col>{this.props.name}</Col>
					<Col>{this.props.level}</Col>
					<Col>{this.props.name}</Col>
				</Row>
	  );
  }
}

export default Stat;
