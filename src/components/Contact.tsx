"use client";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

const Contact = () => {
  const phoneMap = {
    chan: "010-4858-8390",
    chanFa: "010-5205-2916",
    chanMom: "010-9506-4553",
    hye: "010-3390-9727",
    hyeFa: "010-9024-9727",
    hyeMom: "010-9436-9727",
  };

  const handleContact = (
    type: "tel" | "sms",
    number: string,
    message?: string,
  ) => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (!isMobile) {
      alert("모바일 기기에서만 사용 가능한 기능입니다.");
      return;
    }

    const phoneNumber = number.replace(/-/g, "");

    if (type === "tel") {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      const smsUrl = `sms:${phoneNumber}${message ? `?body=${encodeURIComponent(message)}` : ""}`;
      window.location.href = smsUrl;
    }
  };

  return (
    <section className="font-notokr text-text-base flex h-screen w-full flex-col items-center justify-center gap-8 bg-amber-200 p-5">
      <div className="contact-child flex w-full flex-col">
        <div className="contact-items-hus flex w-full">
          <span className="shrink-0">신랑에게 연락하기</span>
          <div className="flex w-full items-center justify-end gap-2 bg-red-200">
            <button onClick={() => handleContact("tel", phoneMap.chan)}>
              <BsTelephone />
            </button>
            <button onClick={() => handleContact("sms", phoneMap.chan)}>
              <BiMessage />
            </button>
          </div>
        </div>
        <div className="contact-items-wife flex w-full">
          <span className="shrink-0">신부에게 연락하기</span>
          <div className="flex w-full items-center justify-end gap-2 bg-red-200">
            <button onClick={() => handleContact("tel", phoneMap.hye)}>
              <BsTelephone />
            </button>
            <button onClick={() => handleContact("sms", phoneMap.hye)}>
              <BiMessage />
            </button>
          </div>
        </div>
      </div>

      <div className="contact-parents flex w-full justify-between bg-green-300">
        <div className="flex flex-col items-center">
          <span>신랑 측 혼주</span>
          <div>
            <span>
              아버지 <strong>이종식</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2 bg-rose-300">
              <button onClick={() => handleContact("tel", phoneMap.chanFa)}>
                <BsTelephone />
              </button>
              <button onClick={() => handleContact("sms", phoneMap.chanFa)}>
                <BiMessage />
              </button>
            </div>
          </div>
          <div>
            <span>
              어머니 <strong>신미정</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2 bg-rose-300">
              <button onClick={() => handleContact("tel", phoneMap.chanMom)}>
                <BsTelephone />
              </button>
              <button onClick={() => handleContact("sms", phoneMap.chanMom)}>
                <BiMessage />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span>신랑 측 혼주</span>
          <div>
            <span>
              아버지 <strong>송재희</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2 bg-rose-300">
              <button onClick={() => handleContact("tel", phoneMap.hyeFa)}>
                <BsTelephone />
              </button>
              <button onClick={() => handleContact("sms", phoneMap.hyeFa)}>
                <BiMessage />
              </button>
            </div>
          </div>
          <div>
            <span>
              어머니 <strong>김은이</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2 bg-rose-300">
              <button onClick={() => handleContact("tel", phoneMap.hyeMom)}>
                <BsTelephone />
              </button>
              <button onClick={() => handleContact("sms", phoneMap.hyeMom)}>
                <BiMessage />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
