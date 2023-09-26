// src/components/Banner.js
import React from "react";

export default function Banner({ imageSrc, children, fullScreen }) {
  const bannerStyle = {
    margin: fullScreen ? "0" : "0 auto", // Center the banner horizontally with equal margins
    width: fullScreen ? "100%" : "100%", // Use full width when fullScreen is true
  };

  return (
    <div
      className={`relative banner sm:mt-8 mt-12 ${fullScreen ? "w-full" : "2xl:container"
      }`}
      style={bannerStyle}
    >
      <div>
        <img
          className="w-full max-h-[80vh] object-cover"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mt-4">
        {children}
      </div>
    </div>
  );
}
