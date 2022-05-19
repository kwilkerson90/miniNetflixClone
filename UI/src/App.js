import SignIn from './components/SignIn';
import NavBar from './components/Navbar';
import HeroSection from './Hero';
import './App.css';
import Carousel from './Carousel';

function App() {
  
  return (
    <div className="App">
      <SignIn />
      <NavBar/>
      <HeroSection />
      <Carousel />
    </div>
  );
}

export default App;
