import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../netflix.css"
import { Modal, Button, Form, Row, Col } from "react-bootstrap"

class SingleCarousel extends React.Component {
    render() {
        this.componentDidMount = async () => {
            let response = await fetch("http://www.omdbapi.com/?apikey=a0871843&")
                .then(movies = response.json())
                .then(console.log(movies))

        }


        return (
            <Row>
                <Col>
                    CIAO
                </Col>
            </Row>
        )
    }
} export default SingleCarousel