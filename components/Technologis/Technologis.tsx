import { techLogos } from "@/const/techLogos";
import LogoLoop from "../LogoLoop";

export default function Technologies() {
  return (
    <section className="py-14">
      <div style={{ height: "60px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
