import React, { useCallback, useEffect, useRef, useState } from "react";
import LightRays from "../components/LightRays";
import { UploadCloud } from "lucide-react";

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFiles = useCallback((files) => {
    setError("");
    if (!files || files.length === 0) return;
    const f = files[0];
    if (!f.type || !f.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      return;
    }
    // optional: limit file size to 10MB
    if (f.size > 10 * 1024 * 1024) {
      setError("File is too large (max 10MB).");
      return;
    }
    setFile(f);
  }, []);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    // only clear when leaving the drop area entirely
    if (e.target === e.currentTarget) setDragActive(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const onInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const onAreaClick = () => {
    inputRef.current?.click();
  };

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

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          role="button"
          tabIndex={0}
          onClick={onAreaClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onAreaClick();
          }}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`box max-w-xl w-11/12  md:w-1/2 rounded-2xl p-8 border border-zinc-200/20 bg-zinc-400/10 flex flex-col items-center justify-center cursor-pointer transition-shadow ${
            dragActive ? "shadow-lg ring-2 ring-accent-400/50" : ""
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            name="file"
            accept="image/*"
            onChange={onInputChange}
            className="hidden"
          />

          {!preview ? (
            <>
              <UploadCloud size={48} className="text-accent-foreground/50" />
              <h1 className="text-2xl font-semibold my-2 text-foreground/50">
                Upload Your Image
              </h1>
              <p className="text-base text-foreground/50 w-3/4 text-center">
                Drag and drop your image here or click to select a file. Note:
                Only image files are allowed.
              </p>
              {error && (
                <p className="text-sm text-destructive mt-3" role="alert">
                  {error}
                </p>
              )}
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center gap-4">
              <img
                src={preview}
                alt={file?.name || "Selected image"}
                className="max-h-80 object-contain rounded-md"
              />
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                    setError("");
                  }}
                  className="px-4 py-2 bg-destructive text-white rounded-md cursor-pointer hover:opacity-90 transition"
                >
                  Remove
                </button>
                <span className="text-sm text-muted-foreground">
                  {file?.name}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
