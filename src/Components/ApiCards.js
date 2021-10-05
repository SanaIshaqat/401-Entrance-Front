import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap"

export class ApiCards extends Component {
    render() {
        return (
            
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {this.props.apiData.map((obj)=>{
                            return(
<Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={obj.image} />
                                    <Card.Body>
                                        <Card.Title>{obj.watchName}</Card.Title>
                                        <Card.Text>
                                          {obj.description}
                                        </Card.Text>
                                        <Card.Text>
                                        <h6> Price: </h6>{obj.price} USD
                                        </Card.Text>
                                        <Button onClick={e=>this.props.createFav(obj)} variant="primary">Add to Fav</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })
                            
                        }

                    </Row>
                </Container>
            
                    )
    }
}

                    export default ApiCards
