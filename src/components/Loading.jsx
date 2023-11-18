import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-[#202020] flex flex-col gap-8 justify-center items-center z-[999]">
      <h1 className="text-4xl font-bold">SITE NAME</h1>
      <div className=" border-8 border-white border-t-8 border-t-red-600 rounded-full w-[50px] h-[50px] animate-spin"></div>
    </div>
  );
}
