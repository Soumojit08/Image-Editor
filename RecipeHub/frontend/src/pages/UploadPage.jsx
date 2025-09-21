import LightRays from "../components/LightRays";
import UploadSection from "../components/UploadSection";

const UploadPage = () => {
  return (
    <div className="h-screen w-full relative">
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

      <UploadSection />
    </div>
  );
};

export default UploadPage;
