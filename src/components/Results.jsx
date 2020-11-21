import React from "react"
import {Row, Col} from "react-bootstrap"

const Results = (props) => {
  return (
    <Row>
      <Col>
        <span>{props.results}</span>
      </Col>
    </Row>
  )
}

export default Results
