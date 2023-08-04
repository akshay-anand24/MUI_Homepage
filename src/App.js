import NavBar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Hr from './components/hr/Hr';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
    <Hero/>
    <Hr/>
    <Main/>
    <Cards/>
    <Hr/>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
