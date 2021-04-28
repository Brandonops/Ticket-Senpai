import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import StubHubLogo from '../img/stub-hub-logo.png';
import moment from 'moment'

export default function StubHubCard(props) {
    return (
        <div>
            {
                !props.event.id ? (
                    <div className="mt-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" style={{height:'238px', width:'318px'}} src={StubHubLogo}  />
                        <Card.Body>
                            <Card.Title>No matching event found</Card.Title>
                            <hr></hr>
                            <span>NA</span>
                            <Card.Text>
                                Price of Tickets:
                            </Card.Text>
                            <span style={{ color: 'red' }}>
                                No tickets currently available from this vendor.
                            </span>
                        </Card.Body>
                    </Card>
                    </div>
                ) :
                (
                <div className="mt-3">
                <Card style={{ width: '20rem' }}>
                        <Card.Img src={StubHubLogo} alt='StubHub logo' style={{height: '238px', width: '318px'}} />
                    <Card.Body>
                        <Card.Title>{props.event.name}</Card.Title>
                        <hr></hr>
                        <a href={`https://google.com/maps/search/${props.event.venue.name} ${props.event.venue.city}`} target="_blank" rel="noreferrer">
                            <span> @ {props.event.venue.name}</span>
                        </a>
                        <div>
                            {moment.parseZone(props.event.eventDateLocal).format('MM/D/YYYY')}
                        </div>
                        <Card.Text>
                            Price of Tickets:
                        </Card.Text>
                        <Row>
                            <Col>Low</Col>
                            <Col>Average</Col>
                            <Col>High</Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Button variant="success">${Math.round(props.event.ticketInfo.minListPrice)}</Button>
                            </Col>
                            <Col sm={4}>
                                <Button name="averagePrice" variant="primary">${
                                Math.round((props.event.ticketInfo.maxListPrice + props.event.ticketInfo.minListPrice) / 2)}
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Button variant="danger">${Math.round(props.event.ticketInfo.maxListPrice)}</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </div>
                )
        }
        </div>
    )
}

