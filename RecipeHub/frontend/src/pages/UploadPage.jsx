import { useState, useRef, useEffect } from "react";
import LightRays from "../components/LightRays";
import { UploadCloud } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UploadPage = () => {
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

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    if (!f.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setError("File is too large (max 10MB).");
      return;
    }

    setError("");
    setFile(f);
  };

  const handleUpload = async () => {
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "RecipeHub");

    try {
      const uploadUrl = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

      const resp = await axios.post(uploadUrl, data);
      toast.success("Image uploaded successfully!");
      console.log("Upload success:", resp.data.secure_url);

      setPreview(resp.data.secure_url); 
    } catch (err) {
      toast.error("Image upload failed.");
      console.error("Upload error:", err);
    }
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
          onClick={() => {
            if (!file) inputRef.current?.click();
          }}
          className="box max-w-xl w-11/12 md:w-1/2 rounded-2xl p-8 border border-zinc-200/20 bg-zinc-400/10 flex flex-col items-center justify-center cursor-pointer transition-shadow"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {!preview ? (
            <>
              <UploadCloud size={48} className="text-accent-foreground/50" />
              <h1 className="text-2xl font-semibold my-2 text-foreground/50">
                Upload Your Image
              </h1>
              <p className="text-base text-foreground/50 w-3/4 text-center">
                Drag and drop your image here or click to select a file.
              </p>
              {error && (
                <p className="text-sm text-destructive mt-3" role="alert">
                  {error}
                </p>
              )}
            </>
          ) : (
            <div className="w-full flex flex-col items-center gap-4">
              <img
                src={preview}
                alt="Uploaded preview"
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
                  className="px-4 py-2 bg-destructive text-white rounded-md hover:opacity-90 transition"
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={handleUpload}
                  className="px-4 py-2 bg-accent text-white rounded-md hover:opacity-90 transition cursor-pointer"
                >
                  Upload
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
