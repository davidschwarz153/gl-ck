// import React from "react";
// import Header from "./components/Header";
// import ErrorBoundary from "./components/ErrorBoundary";
// import About from "./components/About"; // Import the About component
// import Footer from "./components/Footer"; // Import the About component
// import backgroundImage from "./assets/images/bck.jpeg";

// function App() {
//   return (
//     <div class="bg-gradient-to-t from-blue-800 via-blue-800 to-cyan-600">
      
//       <img src={backgroundImage} alt="Logo" className="absolute opacity-30 w-full z-{-1}" />

//       <ErrorBoundary className="z-10">
//         <Header />
//         <About />
//         <Footer />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;


import React from "react";

const App = () => {
  return (
    <div data-theme="light">
      {/* Header */}
      <header>
        <div className="h-12 flex items-center justify-center text-lg text-white bg-purple-600 shadow-inner">
          <h2>Discover your inner luck</h2>
        </div>
        <nav className="navbar bg-base-100 border shadow-lg px-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="">Meditation</a>
                </li>
                <li>
                  <a href="">Mindfulness</a>
                </li>
                <li>
                  <a href="">Nutrition</a>
                </li>
                <li>
                  <a href="">Gratitude</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">yourLuck</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="">Meditation</a>
              </li>
              <li>
                <a href="">Mindfulness</a>
              </li>
              <li>
                <a href="">Nutrition</a>
              </li>
              <li>
                <a href="">Gratitude</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <a className="btn">Contact</a>
            <a className="btn btn-primary">Get Started</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="m-12">
        <section className="hero bg-base-200 h-[65vh] shadow-2xl mb-12 rounded-2xl">
          <article className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-10 tracking-wide">
                Enhance yourLuck
              </h1>
              <button className="btn btn-primary">Start Quiz</button>
            </div>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer footer-center bg-purple-600 text-primary-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p className="font-bold">
            yourLuck inc.
            <br />
          </p>
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;
