import React from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About"; // Import the About component
import Footer from "./components/Footer"; // Import the About component
import backgroundImage from "./assets/images/bck.jpeg";

function App() {
  return (
    <div class="bg-gradient-to-t from-blue-800 via-blue-800 to-cyan-600">
      
      <img src={backgroundImage} alt="Logo" className="absolute opacity-30 w-full z-{-1}" />

      <ErrorBoundary className="z-10">
        <Header />
        <About />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
