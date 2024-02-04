import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import Carousel from "./components/Carousel";
import './App.css'
import Card from "./Card";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Prenav/>
      <Navbar/>
    <Carousel/>
    <Card/>
    <Footer/>
    </div>
  );
}

export default App;
