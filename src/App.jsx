import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import CommentList from "./components/CommentList"
import Header from "./components/Header"
import Results from "./components/Results"
import NetflixNavBar from "./components/Navbar"
import {render} from "@testing-library/react"
import Gallery from "./components/Gallery"

class App extends React.Component {
  state = {
    movies: [],
  }

  onChange = (e) => {
    // when valuechanged
    console.log(e.target.value)
  }
  fetchMovies = async (query) => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=a0871843&s=${query}`
    )
    let result = await response.json()
    console.log(result)
    let res = await result
    console.log(res)
    this.setState({movies: res.Search})
  }

  onKeyDown = (e) => {
    // when someone pressed any button
    if (e.key === "Enter") {
      e.preventDefault()
      this.fetchMovies(e.target.value)
    }
  }

  render() {
    return (
      <>
        {" "}
        <NetflixNavBar onKeyDown={this.onKeyDown} onChange={this.onChange} />
        {/* <Header /> */}
        <Results results={this.state.movies} />
        {/* <CommentList /> */}
        <Gallery saga="Harry Potter" />
        <Gallery saga="Lord of the Rings" />
        <Gallery saga="Star Wars" />
      </>
    )
  }
}

export default App
