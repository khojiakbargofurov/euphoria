import { Cards } from "@/components/Card";
import { Carousel } from "@/components/Carousel";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Carousel/>
      <Cards/>
    </main>
  );
}
