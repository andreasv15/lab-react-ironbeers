import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import NavBar from './components/NavBar';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">

    <NavBar />

    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/beers" element={ <ListBeers /> } />
      <Route path="/beers/:beerId" element={ <SingleBeer /> } />
      <Route path="/random-beer" element={ <RandomBeer /> } />
      <Route path="/new-beer" element={ <NewBeer /> } />
    </Routes>


    </div>
  );
}

export default App;
