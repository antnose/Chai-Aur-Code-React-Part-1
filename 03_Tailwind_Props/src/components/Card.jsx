import React from "react";

const Card = ({ channel, btnText = "Go On" }) => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://images.pexels.com/photos/33411744/pexels-photo-33411744.jpeg"
          alt="Card"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{channel}</h2>
          <p className="mt-2 text-gray-600">
            This is a short description for the card. It's simple and clean.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
