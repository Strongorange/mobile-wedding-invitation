export type NaverMap = naver.maps.Map;
declare global {
  interface Window {
    naver: typeof naver;
  }
}
