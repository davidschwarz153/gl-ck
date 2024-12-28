import React from "react";
import backgroundImage from "../assets/images/bck.jpeg";
import PayPalDonateButton from "./PaypalDonatButton";
import BitcoinDonateButton from "./BitcoinDonateButton";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi.
              </h3>
              <p className="text-xl text-white max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore autem odio. Deleniti sint unde voluptatibus quod adipisci est numquam?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam magni qui ducimus quae enim quia obcaecati sequi, non nisi soluta asperiores. Doloribus placeat assumenda, rerum distinctio ipsum quod at!

            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unsere Werte
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque excepturi recusandae adipisci necessitatibus modi unde. Itaque dolorum provident, fugit, nemo facilis nam accusamus temporibus in, unde quaerat cupiditate quibusdam amet voluptate porro nesciunt! Quia ipsam soluta sequi consequuntur consectetur, veritatis iste nulla quam repellendus magnam neque provident amet nobis. Aspernatur!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unser Ansatz
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magnam.
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
          <div className="flex justify-center center gap-6">
            <PayPalDonateButton />
            <BitcoinDonateButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
