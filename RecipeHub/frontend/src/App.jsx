import LightRays from "./components/LightRays";

const App = () => {
  return (
    <div className="relative h-full w-full font-sans dark:bg-background text-foreground ">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
};

export default App;
