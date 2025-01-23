"use client";
import { NaverMap } from "@/types/namp";
import Script from "next/script";
import React, { useRef } from "react";

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

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initMap}
      />
      <div>
        <div id="map" className="h-[80dvw] w-[80vw] bg-yellow-300"></div>
        <div className="flex w-full items-center gap-2">
          <button onClick={openNaverMapNavi}>
            <p>길찾기</p>
          </button>
          <button onClick={openNaverMapLocation}>
            <p>지도보기</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default NMap;
