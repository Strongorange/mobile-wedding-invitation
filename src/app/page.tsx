// import Image from "next/image";

import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import First from "@/components/First";
import Gallery from "@/components/Gallery";
import Intermission from "@/components/Intermission";
import Intro from "@/components/Intro";
import NMap from "@/components/NMap";

export default function Home() {
  return (
    <div className="flex w-full justify-center">
      <main className="w-full max-w-[450px]">
        <First />
        <Intro />
        <Calendar />
        <Gallery />
        <Intermission />
        <Contact />
        <NMap />
      </main>
    </div>
  );
}
