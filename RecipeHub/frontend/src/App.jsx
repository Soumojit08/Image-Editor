import LightRays from "./components/LightRays";
import PillNav from "./components/PillNav";

const App = () => {
  return (
    <div className="relative min-h-screen w-full font-sans dark:bg-background text-foreground ">
      {/* background animation  */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#22C55E"
        raysSpeed={1.3}
        lightSpread={0.9}
        rayLength={1.1}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0.2}
        distortion={0.05}
        className="custom-rays"
      />

      {/* nav  */}
      <div className="w-full flex items-center justify-center z-[999]">
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#fafafa"
          hoveredPillTextColor="#fafafa"
          pillTextColor="#0A0A0A"
        />
      </div>


    </div>
  );
};

export default App;
