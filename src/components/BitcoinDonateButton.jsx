import { useState } from "react";

const BitcoinDonateButton = () => {
  const [showModal, setShowModal] = useState(false);
  const bitcoinAddress = "bc1q4ek4fsgqmxfwxt67zuakfq8rn0r5qepx96p04g";

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bitcoinAddress);
    // Optional: Add feedback that address was copied
  };

  return (
    <>
      <a
        href="#"
        onClick={handleClick}
        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105"
      >
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.974.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.18-.24.45-.614.35.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.236-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
          </svg>
          <span>spenden...</span>
        </div>
      </a>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">
              Bitcoin Spenden-Adresse
            </h3>
            <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded">
              <code className="flex-1 text-sm break-all">{bitcoinAddress}</code>
              <button
                onClick={handleCopy}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-200"
              >
                Kopieren
              </button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BitcoinDonateButton;
