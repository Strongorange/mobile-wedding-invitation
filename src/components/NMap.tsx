"use client";
import { NaverMap } from "@/types/namp";
import Script from "next/script";
import React, { useRef } from "react";

const NMap = () => {
  const mapRef = useRef<NaverMap | null>(null);

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
      <div id="map" className="h-[80dvw] w-[80vw] bg-yellow-300"></div>
    </>
  );
};

export default NMap;
