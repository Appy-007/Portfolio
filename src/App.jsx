import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App (){
    return(
        <div>
        <Navbar/>
        <Header/>
        <About />
       <Experience />
       <Contact />
       <Footer />
        </div>
       
    )
}

export default App;