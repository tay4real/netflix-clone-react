// -Create, using components, the several "galleries" for the movies (at
//     least 3 galleries with 3 sagas you like (es.: Harry Potter, Lord of the

//this component fetches movies according to a query, then displays them, there will be several instances

import React from "react"
import {Carousel, Container, Row, Col} from "react-bootstrap"

class Gallery extends React.Component {
  state = {
    movies: [], //array of objects
  }

  componentDidMount = async () => {
    let query = this.props.saga
    await this.getMovies(query)
    console.log(this.state.movies)
  }

  getMovies = async (query) => {
    //fetch from server all movie objects of a saga or genre
    //set the constructor according to the resul

    let response = await fetch(
      `http://www.omdbapi.com/?apikey=a0871843&s=${query}`
    )

    if (response.ok) {
      let result = await response.json() //search object
      console.log(result)
      this.setState({movies: result.Search})
    } else {
      alert("something went wrong")
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Carousel>
              {this.state.movies.map((movie) => (
                <Carousel.Item>
                  <img
                    className="d-block w-25"
                    src={movie.Poster}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year} </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Gallery
