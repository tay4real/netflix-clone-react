import "./App.css"
import Header from "./components/header"
import NetflixNavBar from "./components/navbar"
import SearchBar from "./components/SearchBar"

function App() {
  const onChange = (e) => {
    // when valuechanged
    console.log(e.target.value)
  }
  const fetchMovies = async (query) => {
    alert(query)

    let response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=a0871843&`,
      {
        method: "GET",
      }
    )
    let result = await response.json()
    console.log(result)
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
      <NetflixNavBar onKeyDown={onKeyDown} onChange={onChange} />
      <Header />
    </>
  )
}

export default App
