import React from "react";
import Image from "next/image";

const Intro = () => {
  const textWrapCls = "flex w-full flex-col items-center ";

  return (
    <section className="font-notokr text-text-base relative flex h-screen w-full flex-col items-center justify-center p-5">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/intro_bg.mp4" type="video/mp4" />
      </video>

      {/* 비디오 위에 콘텐츠를 보여주기 위한 오버레이 레이어 */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="mb-[20vh] flex w-full flex-col gap-[5vh]">
          <div className={`${textWrapCls} text-base`}>
            <span>사랑함이 버텨 꽃피우는 날</span>
            <span>하나됨의 비밀을 알아가며</span>
            <span>하나님 닮아가는 부부로 살기를 약속합니다</span>
          </div>

          <div className={`${textWrapCls} text-base`}>
            <span>곁에서 아껴주셨던 고마운 분들을 모십니다</span>
            <span>지혜를 나눠주시고 격려해주시면</span>
            <span>감사하겠습니다</span>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex w-full flex-col items-center">
            <span className="text-sm">이종식 신미정</span>
            <p className="text-xs">장남</p>
            <span className="font-bold">이찬휘</span>
          </div>

          <div className="flex h-full items-center justify-center">
            <Image
              src="/img/intro_divide_4.png"
              alt="디바이드"
              width={90}
              height={90}
            />
          </div>

          <div className="flex w-full flex-col items-center">
            <span className="text-sm">송재희 김은이</span>
            <p className="text-xs">장녀</p>
            <span className="font-bold">송혜진</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
