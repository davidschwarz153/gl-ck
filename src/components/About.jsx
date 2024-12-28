import React from "react";
import backgroundImage from "../assets/images/bck.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-100 to-pink-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
          Über uns
        </h2>
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            src={backgroundImage}
            alt="Logo"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Die Schlüssel ins Glück
              </h3>
              <p className="text-xl text-white max-w-lg mx-auto">
                Verstehe das Leben und du wirst es lieben, versprochen
              </p>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unsere Mission
            </h4>
            <p className="text-gray-600">
              Wir möchten Menschen dabei helfen, ihr volles Potenzial zu
              entfalten und ein erfülltes und glückliches Leben zu führen.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unsere Werte
            </h4>
            <p className="text-gray-600">
              Authentizität, Mitgefühl und kontinuierliches Wachstum stehen im
              Mittelpunkt unserer Arbeit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unser Ansatz
            </h4>
            <p className="text-gray-600">
              Wir kombinieren bewährte Methoden ohne innovativen Techniken, um
              maßgeschneidertes Bewusstsein zu erlangen.
            </p>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h4 className="text-2xl font-semibold text-purple-700 mb-4">
            Unterstütze unsere Vision
          </h4>
          <p className="text-gray-600 mb-6">
            Dieses Projekt ist und bleibt kostenfrei zugänglich. Wenn du unsere
            Arbeit wertvoll findest, freuen wir uns über deine Unterstützung.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(
                "bc1q4ek4fsgqmxfwxt67zuakfq8rn0r5qepx96p04g"
              );
              // Optional: Add toast/notification that address was copied
            }}
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.974.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.18-.24.45-.614.35.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.236-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
              </svg>
              <span>Bitcoin spenden</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
