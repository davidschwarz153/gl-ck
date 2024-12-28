import React from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About"; // Import the About component
import Footer from "./components/Footer"; // Import the About component

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ErrorBoundary>
        <Header />
        <About />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
