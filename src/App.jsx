
import './App.css';
import SingleCarousel from './components/Carousels';
import Header from './components/Header';
import NetflixNavBar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <NetflixNavBar />
      <Header />
      <SingleCarousel />
    </>
  );
}

export default App;