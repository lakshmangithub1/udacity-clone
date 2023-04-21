import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import FooterM from './components/Footer2'; 
import BlueCard from './components/BlueCard'; 
import WhiteCard from './components/WhiteCard';
import Footer2 from './components/Footer2';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div >
      <Navbar/> 
      <HeroSection/>
      <BlueCard/>
      <WhiteCard/> 
      <FooterM/> 
      <Footer/>
    </div>
  );
}

export default App;
