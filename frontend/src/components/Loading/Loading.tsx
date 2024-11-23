import React from "react";

export default function Loading() {
  return (
    <div className="bg-white  absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
}
