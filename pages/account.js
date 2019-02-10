import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { format } from 'url'
import Countdown from 'react-countdown-now';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Moment from 'react-moment';

// Random component
const Completionist = () => <span className='DeliveryCutoffPast'>Past delivery cutoff</span>;

 // Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='container'>
        Customize within <span className='DeliveryCutoffCountdownTimer'>
        {days}day {hours}hr {minutes}min {seconds}sec
        to receive by Monday
        </span>
      </div>
    );
  }
};

export default class Account extends Component {
  static async getInitialProps ({ req, query, pathname, isVirtualCall }) {
    const url = format({ pathname, query })

    const deliveries = await fetch(
      `https://my-json-server.typicode.com/susanblueapron/deliveries/db`
    ).then(response => response.json())

    const props = { deliveries }

    return props
  }

  render () {
    const { deliveries } = this.props

    const dateToFormat = deliveries['2019-02-16'];
    return (
      <Container>
        <Row>
        <h1>{dateToFormat}</h1>
        <Moment date={dateToFormat} />
        <Countdown
          date={Date.parse(deliveries['2019-02-16'])}
          renderer={renderer}
        />
        </Row>
      </Container>
    )
  }
}
