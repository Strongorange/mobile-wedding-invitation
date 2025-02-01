import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <section className="flex h-[100vh] w-full flex-col items-center justify-between gap-8 bg-white px-[1.25rem] py-[10vh] pb-[15vh] font-notokr text-text-base">
      <div className="title-section flex w-full flex-col items-center">
        <h1 className="text-[2rem] font-medium tracking-[0.3em]">결혼합니다</h1>
        <h3 className="text-[1.25rem] tracking-[0.1em]">찬휘와 혜진</h3>
      </div>

      <div className="img-section relative flex max-h-[45vh] w-full grow items-center justify-center">
        <Image
          src={"/img/first_bg.png"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          style={{
            objectFit: "contain",
          }}
          alt="메인 이미지"
        />
      </div>

      <div className="time-location-section flex w-full flex-col items-center gap-2">
        <p className="text-[1.18rem]">2025.05.25 SAT PM 1:10</p>
        <p className="text-[0.93rem]">여의도웨딩컨벤션 3층 단독홀</p>
      </div>
    </section>
  );
};

export default First;
