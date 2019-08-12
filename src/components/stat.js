import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import store from '../store/store.js'

class Stat extends Component {
  render() {

		const stat = this.props.att

		if (this.props.level < 1) {
			return <div/>
		}

	  return (
	      <Row>
					<Col>{this.props.name}</Col>
					<Col>{stat.base}</Col>
					<Col>{stat.multi}</Col>
					<Col>{stat.base}</Col>
				</Row>
	  );
  }
}

export default Stat;
