// import Image from "next/image";

import NMap from "@/components/NMap";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-red-300">
      <main className="">
        <NMap />
      </main>
    </div>
  );
}
