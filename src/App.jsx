
import './App.css';
import CommentList from './components/CommentList';
import Header from './components/Header';
import NetflixNavBar from './components/Navbar';

function App() {
  return (
    <> <NetflixNavBar />
      <Header />
      <CommentList />
    </>
  );
}

export default App;