import "./App.css"
import CommentList from "./components/CommentList"
import Header from "./components/Header"
import Results from "./components/Results"
import NetflixNavBar from "./components/Navbar"

function App() {
  const onChange = (e) => {
    // when valuechanged
    console.log(e.target.value)
  }
  const fetchMovies = async (query) => {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=a0871843&`
    )
    let result = await response.json()
    console.log(result)
    return result
  }

  const onKeyDown = (e) => {
    // when someone pressed any button
    if (e.key === "Enter") {
      e.preventDefault()
      fetchMovies(e.target.value)
    }
  }
  return (
    <>
      {" "}
      <NetflixNavBar onKeyDown={onKeyDown} onChange={onChange} />
      <Header />
      <Results results={this.fetchMovies} />
      <CommentList />
    </>
  )
}

export default App
