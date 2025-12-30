import './App.css'
import LatestCollection from './components/Homepage/LatestCollection';
import Navbar from './components/Pages/Navbar';
import Hero from './components/Homepage/Hero';
import Footer from './components/Pages/Footer';
import Ourpolicies from './components/Homepage/Ourpolicies';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Ourpolicies/>
      <Footer/>
      {/* <LatestCollection/> */}
    </>
  )
}

export default App
