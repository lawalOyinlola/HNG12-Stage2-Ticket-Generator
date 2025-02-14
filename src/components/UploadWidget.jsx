/* eslint-disable react/prop-types */
import { useState } from "react";

function UploadWidget({ setImageUrl }) {
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openWidget = () => {
    setIsLoading(true);

    if (!window.cloudinary) {
      alert(
        "Cloudinary widget is not available. Please check your internet connection"
      );
      setIsLoading(false);
      return;
    }

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "url"],
        multiple: false,
        cropping: true,
        showAdvancedOptions: false,
      },
      (error, result) => {
        if (error) {
          console.error("Upload error:", error);
          setIsLoading(false);
          return;
        }

        if (result.event === "success") {
          const uploadedImageUrl = result.info.secure_url;
          setImageUrl(uploadedImageUrl);
          setImagePreview(uploadedImageUrl);
          localStorage.setItem("imageUrl", uploadedImageUrl);
        }

        if (result.event === "close") {
          setIsLoading(false);
        }
      }
    );

    widget.open();
  };

  return (
    <div className="photo-bg">
      <button
        onClick={openWidget}
        className={`${imagePreview ? "hidden" : " "}`}
        style={imagePreview ? { "--image-path": `url(${imagePreview})` } : {}}
        disabled={isLoading}
      >
        <img
          src="./cloud-download.svg"
          alt="Download icon"
          className="uploaded-img"
        />
        <p>
          {isLoading
            ? "Please wait...     Modal will open shortly"
            : "Drag & drop or click to upload"}
        </p>
      </button>
    </div>
  );
}

export default UploadWidget;
