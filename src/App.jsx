import './App.css'
import LatestCollection from './components/Homepage/LatestCollection';
import Navbar from './components/Pages/Navbar';
import Hero from './components/Homepage/Hero';
import Footer from './components/Pages/Footer';
import Ourpolicies from './components/Homepage/Ourpolicies';
import Bestseller from './components/Homepage/Bestseller';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Ourpolicies/>
      <Footer/>
    </>
  )
}

export default App
