import React from "react";

const Modal = ({ imageUrl, closeModal }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center backdrop px-8"
      onClick={handleClose}
    >
      <div className="absolute bg-white shadow-lg 8">
        <button
          onClick={closeModal}
          className="absolute right-0 px-2 text-center text-red-500 text-2xl"
        >
          x
        </button>
        <img
          src={imageUrl}
          alt="Modal"
          className="h-full md:h-[500px] lg:h-[700px]"
        />
      </div>
    </div>
  );
};

export default Modal;
