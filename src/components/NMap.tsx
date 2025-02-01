"use client";
import { NaverMap } from "@/types/namp";
import Script from "next/script";
import React, { useRef } from "react";
import {
  IoBusOutline,
  IoTrainOutline,
  IoCarOutline,
  IoClipboardOutline,
} from "react-icons/io5";

const NMap = () => {
  const mapRef = useRef<NaverMap | null>(null);

  const openNaverMapLocation = () => {
    const lat = 37.521753;
    const lng = 126.919335;
    const name = encodeURIComponent("여의도웨딩컨벤션");

    // 지도 보기 URL
    const mapUrl = `nmap://place?lat=${lat}&lng=${lng}&name=${name}&appname=${process.env.NEXT_PUBLIC_APP_NAME}`;

    // 모바일 기기 확인
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isMobile) {
      window.location.href = mapUrl;
    } else {
      // PC에서는 네이버 지도 웹으로 이동
      window.open(`https://map.naver.com/v5/search/${name}`);
    }
  };

  const openNaverMapNavi = () => {
    const lat = 37.521753;
    const lng = 126.919335;
    const name = encodeURIComponent("여의도웨딩컨벤션");

    // 길찾기 URL (현재 위치에서 목적지까지)
    const directionUrl = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${name}&appname=${process.env.NEXT_PUBLIC_APP_NAME}`;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isMobile) {
      window.location.href = directionUrl;
    } else {
      // PC에서는 네이버 지도 길찾기로 이동
      window.open(`https://map.naver.com/v5/directions/${lat},${lng},${name}`);
    }
  };

  const createMarker = (position: naver.maps.LatLng) => {
    if (!mapRef || !mapRef.current) return;
    const marker = new naver.maps.Marker({
      position,
      map: mapRef.current,
      icon: {
        url: "https://map.pstatic.net/resource/api/v2/image/maps/selected-marker/229169@2x.png?version=12&mapping=marker-108",
        size: new naver.maps.Size(46, 58),
        scaledSize: new naver.maps.Size(46, 58),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(23, 29),
      },
    });

    const infowindow = new naver.maps.InfoWindow({
      content: `
          <div style="padding:10px;min-width:200px;line-height:150%;">
            <h4 style="margin-top:5px;">여의도웨딩컨벤션</h4>
            <p>서울특별시 영등포구</p>
          </div>
          `,
      borderWidth: 0,
      anchorSize: new naver.maps.Size(0, 0),
      pixelOffset: new naver.maps.Point(10, -5),
    });

    infowindow.open(mapRef.current, marker);
  };

  const initMap = () => {
    const zoom = 16;
    const CENTER: naver.maps.LatLng = new naver.maps.LatLng(
      37.521753,
      126.919335,
    );

    const mapOptions: naver.maps.MapOptions = {
      center: CENTER,
      zoom,
      logoControl: false,
      scaleControl: false,
    };

    mapRef.current = new window.naver.maps.Map("map", mapOptions);

    createMarker(CENTER);
  };

  const copyAddressToClipboard = async () => {
    const address = "서울특별시 영등포구 여의대로 14 KT빌딩";
    try {
      await navigator.clipboard.writeText(address);
      alert("복사되었습니다");
    } catch (error) {
      console.error("복사 실패", error);
    }
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initMap}
      />
      <section className="flex w-full flex-col items-center justify-center gap-8 bg-blue-200 p-5 font-notokr text-sm text-text-base">
        <h1>LOCATION</h1>
        <div className="address flex w-full flex-col items-center">
          <div className="flex items-center gap-2">
            <p className="text-text-base">
              서울특별시 영등포구 여의대로 14 KT빌딩
            </p>
            <IoClipboardOutline onClick={() => copyAddressToClipboard()} />
          </div>
        </div>
        <div
          id="map"
          className="h-[90dvw] w-[100vw] max-w-[450px] bg-yellow-300"
        ></div>

        <div className="flex w-full items-center gap-2">
          <button onClick={openNaverMapNavi}>
            <div className="flex items-center justify-center rounded-xl bg-white p-4">
              <p>길찾기</p>
            </div>
          </button>
          <button onClick={openNaverMapLocation}>
            <div className="flex items-center justify-center rounded-xl bg-white p-4">
              <p>지도보기</p>
            </div>
          </button>
        </div>

        <div className="way-to-come flex w-full flex-col gap-4">
          <div className="h-[1px] w-full bg-black" />

          <div className="way-bus flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="way-icon-bus flex aspect-square w-7 shrink-0 items-center justify-center rounded-[50%] bg-[#979797]">
                <IoBusOutline size={18} color="#ffffff" />
              </div>
              <p>버스</p>
            </div>
            <div className="way-texts-bus flex flex-col">
              <p>한국경제인협회 정류장 하차</p>
              <p>(정류장번호 : 19161)</p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-black" />

          <div className="way-train flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="way-icon-bus flex aspect-square w-7 shrink-0 items-center justify-center rounded-[50%] bg-[#979797]">
                <IoTrainOutline size={18} color="#ffffff" />
              </div>
              <p>지하철</p>
            </div>
            <div className="way-texts-bus flex flex-col">
              <p>5호선 · 9호선 여의도역 - 1번 출구</p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-black" />

          <div className="way-car flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="way-icon-bus flex aspect-square w-7 shrink-0 items-center justify-center rounded-[50%] bg-[#979797]">
                <IoCarOutline size={18} color="#ffffff" />
              </div>
              <p>승용차</p>
            </div>
            <div className="way-texts-bus flex flex-col">
              <p>
                네비게이션 : 여의도웨딩컨벤션 또는 여의도KT 또는 여의대로14 입력
              </p>
              <p>
                주차장 안내 : KT빌딩 주차장 이용 주차요원의 안내를 받으세요.
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-black" />

          <div className="way-rent-bus flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="way-icon-bus flex aspect-square w-7 shrink-0 items-center justify-center rounded-[50%] bg-[#979797]">
                <IoBusOutline size={18} color="#ffffff" />
              </div>
              <p>전세 버스</p>
            </div>
            <div className="way-texts-bus flex flex-col">
              <p>군산 - 여의도웨딩컨벤션</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NMap;
