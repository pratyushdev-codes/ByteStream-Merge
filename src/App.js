import './App.css';
// import DaNavbar from './components/DaNavbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Working from './components/Working';
import Nav from './components/Nav';
import Watch from './components/Watch';
import Phone from './components/Phone';
// import Stores from './components/Stores';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <DaNavbar/> */}
      <Nav/>
      <Hero/>
      <Content/>
      <Working/>
      <div id='app' className='flex p-5 justify-center items-center'>
          <div id='phone' className='pr-12 m-5'><Phone/></div>
          {/* <div id='store' className=' m-5'><Stores/></div> */}
          <div id='watch' className='pl-12 m-5'><Watch/></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
