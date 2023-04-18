import Navbar from './components/Navbar' 
import Footer from './components/Footer'; 
import FooterM from './components/Footer2'; 
import BlueCard from './components/BlueCard'; 
import GrayCard1 from './components/GrayCard1';
import GrayCard2 from './components/GrayCard2'
import WhiteCard from './components/WhiteCard';
import './App.css';

function App() {
  return (
    <div >
      <Navbar/> 
      <FooterM/> 
      <BlueCard/>
      <WhiteCard/> 
      <GrayCard1/>
      <GrayCard2/>
    </div>
  );
}

export default App;
