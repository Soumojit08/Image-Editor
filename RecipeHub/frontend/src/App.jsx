import LightRays from "./components/LightRays";

const App = () => {
  return (
    <div className="relative min-h-screen w-full font-sans dark:bg-background text-foreground ">
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
    </div>
  );
};

export default App;
