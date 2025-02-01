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
    <section className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-amber-200 p-5 font-notokr text-text-base">
      <h1 className="text-3xl">축하 연락처</h1>
      <div className="contact-child flex w-full flex-col gap-4">
        <div className="contact-items-hus flex w-full items-center">
          <span className="shrink-0">이찬휘</span>
          <div className="flex w-full items-center justify-end gap-2">
            <button
              onClick={() => handleContact("tel", phoneMap.chan)}
              className="rounded-[50%] bg-[#ABD6FE] p-2"
            >
              <BsTelephone size={26} />
            </button>
            <button
              onClick={() => handleContact("sms", phoneMap.chan)}
              className="rounded-[50%] bg-[#ABD6FE] p-2"
            >
              <BiMessage size={26} />
            </button>
          </div>
        </div>
        <div className="contact-items-wife flex w-full">
          <span className="shrink-0">송혜진</span>
          <div className="flex w-full items-center justify-end gap-2">
            <button
              onClick={() => handleContact("tel", phoneMap.hye)}
              className="rounded-[50%] bg-[#FFC6C6] p-2"
            >
              <BsTelephone size={26} />
            </button>
            <button
              onClick={() => handleContact("sms", phoneMap.hye)}
              className="rounded-[50%] bg-[#FFC6C6] p-2"
            >
              <BiMessage size={26} />
            </button>
          </div>
        </div>
      </div>

      <div className="contact-parents flex w-full justify-between">
        <div className="flex flex-col items-center">
          <span>신랑 측 혼주</span>
          <div>
            <span>
              아버지 <strong>이종식</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2">
              <button
                onClick={() => handleContact("tel", phoneMap.chanFa)}
                className="rounded-[50%] bg-[#ABD6FE] p-2"
              >
                <BsTelephone />
              </button>
              <button
                onClick={() => handleContact("sms", phoneMap.chanFa)}
                className="rounded-[50%] bg-[#ABD6FE] p-2"
              >
                <BiMessage />
              </button>
            </div>
          </div>
          <div>
            <span>
              어머니 <strong>신미정</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2">
              <button
                onClick={() => handleContact("tel", phoneMap.chanMom)}
                className="rounded-[50%] bg-[#ABD6FE] p-2"
              >
                <BsTelephone />
              </button>
              <button
                onClick={() => handleContact("sms", phoneMap.chanMom)}
                className="rounded-[50%] bg-[#ABD6FE] p-2"
              >
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
            <div className="flex w-full items-center justify-center gap-2">
              <button
                onClick={() => handleContact("tel", phoneMap.hyeFa)}
                className="rounded-[50%] bg-[#FFC6C6] p-2"
              >
                <BsTelephone />
              </button>
              <button
                onClick={() => handleContact("sms", phoneMap.hyeFa)}
                className="rounded-[50%] bg-[#FFC6C6] p-2"
              >
                <BiMessage />
              </button>
            </div>
          </div>
          <div>
            <span>
              어머니 <strong>김은이</strong>
            </span>
            <div className="flex w-full items-center justify-center gap-2">
              <button
                onClick={() => handleContact("tel", phoneMap.hyeMom)}
                className="rounded-[50%] bg-[#FFC6C6] p-2"
              >
                <BsTelephone />
              </button>
              <button
                onClick={() => handleContact("sms", phoneMap.hyeMom)}
                className="rounded-[50%] bg-[#FFC6C6] p-2"
              >
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
