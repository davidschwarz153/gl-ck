import { useState } from "react";
import ppIcon from "../assets/images/pp.svg";

const PayPalDonateButton = () => {
  return (
    <a
      href="https://www.paypal.com/pool/9aXabzsgQ1?sr=wccr"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-blockrounded-full transition duration-300 transform hover:scale-150"
    >
      <div className="flex items-center justify-center">
        <img width={50} src={ppIcon} alt="Paypal Icon" />
      </div>
    </a>
  );
};

export default PayPalDonateButton;
