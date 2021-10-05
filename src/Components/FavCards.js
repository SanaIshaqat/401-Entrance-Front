import React, { Component } from 'react'
import { Card, Button, Container, Row, Col } from "react-bootstrap"

export class FavCards extends Component {
    render() {
        return (
            <Container>
            <Row xs={1} md={3} className="g-4">
                {this.props.favApiData.map((obj)=>{
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
                                {/* <Button onClick={e=>this.props.createFav(obj)} variant="primary">Add to Fav</Button> */}
                                <Button  onClick={e=>this.props.handleDelete(obj.slug)} variant="primary">Delete</Button>
                                {/* <Button variant="primary">Update</Button> */}
                                <Button  onClick={e=>this.props.showForm(obj.watchName,obj.slug)} variant="primary">Update</Button>
                    
                               
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

export default FavCards
