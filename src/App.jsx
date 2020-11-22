import React from "react"
import "./App.css"
import CommentList from "./components/CommentList"
import Header from "./components/Header"
import Results from "./components/Results"
import NetflixNavBar from "./components/Navbar"
import {render} from "@testing-library/react"
import Gallery from "./components/Gallery"

class App extends React.Component {
  state = {
    res_: "",
  }

  onChange = (e) => {
    // when valuechanged
    console.log(e.target.value)
  }
  fetchMovies = async (query) => {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=a0871843&`
    )
    let result = await response.json()
    console.log(result)
    let res = await result.Title
    console.log(res)
    this.setState({res_: res})
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
        <Results results={this.state.res_} />
        {/* <CommentList /> */}
        <Gallery />
        {/* <Gallery />
        <Gallery /> */}
      </>
    )
  }
}

export default App
