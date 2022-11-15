import React from "react"
import Header from "./components/Header";
import Services from "./components/Services";
import Introduction from "./components/Introduction"
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <Services/>
    <Introduction/>
    <Carousel/>
    <Footer/>
    </div>
  );
}

export default App;
