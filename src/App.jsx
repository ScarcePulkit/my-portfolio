// import logo from './logo.svg';
// import './App.css';
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <h1>This is my new portfolio app</h1>
    // </div>


        <div>
          {/* <Cursor /> */}
          <section id="Homepage">
            <Navbar />
            <Hero />
          </section>
          <section id="Career Highlights">
            <Parallax type="career highlights" />
          </section>
          <section>
            <Services />
          </section>
          <section id="Portfolio">
            <Parallax type="portfolio" />
          </section>
          <Portfolio />
          <section id="Contact">
            <Contact />
          </section>
          {/* Framer Motion Crash Course */}
          {/* <Test/>
        <Test/> */}
        </div>
  );
}

export default App;
