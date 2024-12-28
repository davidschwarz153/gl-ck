import { useState } from "react";
import btcIcon from "../assets/images/btc.svg";

// Dann verwenden als:

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
        className="inline-block transition transform duration-300 hover:scale-125 "
      >
        <div className="flex items-center justify-center space-x-2">
          <img width={50} src={btcIcon} alt="Bitcoin Icon" />
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
