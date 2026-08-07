import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/home/Mission";
import Architecture from "@/components/home/Architecture";
import DivisionPreview from "@/components/home/DivisionPreview";
import CouncilPreview from "@/components/home/CouncilPreview";

export default function Home() {
  return (
    <main className="bg-black">

      <Navbar />

      <Hero />

      <Mission />

      <Architecture />

      <DivisionPreview />

      <CouncilPreview />

    </main>
  );
}
