import Contacts from "@/components/Contacts/Contacts";
import DotGrid from "@/components/DotGrid";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologis/Technologis";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div style={{ width: "100%", position: "relative" }}>
        <DotGrid
          dotSize={6}
          gap={14}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 10 }}>
          <Header />
          <div className="pt-36"></div>
          <Hero />
          <Technologies />
          <Projects />
          <Contacts />
        </div>
      </div>
      <div className="container"></div>
    </main>
  );
}
