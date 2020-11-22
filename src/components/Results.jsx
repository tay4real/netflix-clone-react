import React from "react"
import {Row, Col, Card} from "react-bootstrap"

const Results = (props) => {
  return (
    <Row>
      {props.results.map((res) => (
        <Col>
          <Card style={{width: "12 em"}}>
            <Card.Img variant="top" src={res.Poster} />
            <Card.Body>
              <Card.Title>{res.Title}</Card.Title>
              <Card.Text>{res.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Results
