import React from "react";

const Intermission = () => {
  return (
    <section className="font-notokr text-text-base relative flex h-screen w-full flex-col items-center justify-center gap-8 bg-purple-300 p-5">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/intermission_bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Intermission;
