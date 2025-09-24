import LightRays from "../components/LightRays";
import UploadSection from "../components/UploadSection";
import ToggleSwitch from "../components/ToggleSwitch";
import { useState } from "react";
import TextField from "../components/TextField";

const UploadPage = () => {
  const [mode, setMode] = useState("image");

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

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
        <ToggleSwitch
          leftLabel="Image"
          rightLabel="Text"
          initial={mode === "image" ? "left" : "right"}
          onChange={(m) => setMode(m)}
        />
      </div>

      {mode === "image" ? <UploadSection /> : <TextField />}
    </div>
  );
};

export default UploadPage;
