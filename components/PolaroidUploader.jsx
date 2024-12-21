"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toPng } from "html-to-image";

const FRAME_SIZES = {
  small: {
    width: 400,
    height: 480,
    padding: 20,
    fontSize: 16,
  },
  medium: {
    width: 600,
    height: 720,
    padding: 40,
    fontSize: 24,
  },
  large: {
    width: 800,
    height: 960,
    padding: 60,
    fontSize: 32,
  },
};

const PolaroidUploader = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [frameSize, setFrameSize] = useState("medium");
  const elementRef = useRef(null);

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleImageUpload(e.dataTransfer.files);
  };

  const downloadPolaroid = async (imageUrl, imageName) => {
    if (typeof window === "undefined") return; // Guard for SSR

    const sizeConfig = FRAME_SIZES[frameSize];

    // Create canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size based on selected frame size
    canvas.width = sizeConfig.width;
    canvas.height = sizeConfig.height;

    // Draw white Polaroid frame
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load and draw the image
    const img = new window.Image();
    img.crossOrigin = "anonymous";

    let imageWidth;
    let imageHeight;
    await new Promise((resolve, reject) => {
      img.onload = () => {
        // Get image dimensions
        imageWidth = img.width;
        imageHeight = img.height;
        console.log(`Image dimensions: ${imageWidth}x${imageHeight}`);
        resolve();
      };
      img.onerror = reject;
      img.src = imageUrl;
    });

    // const imgCenterX = imageWidth / 2;
    // const imgCenterY = imageHeight / 2;

    // Calculate dimensions to maintain aspect ratio
    const padding = sizeConfig.padding;
    const availableWidth = canvas.width - padding * 2;
    const availableHeight = canvas.height - padding * 2 - padding * 2;

    // const clipX = imgCenterX - (availableWidth / 2);
    // const clipY = imgCenterY - (availableHeight / 2);

    // Draw the image with padding
    ctx.drawImage(img, padding, padding, availableWidth, availableWidth);

    // Clip the image and position the clipped part on the canvas
    // ctx.drawImage(img, clipX, clipY, availableWidth, availableHeight, padding, padding, availableWidth, availableWidth);

    // Create download link
    const link = document.createElement("a");
    link.download = `polaroid-${frameSize}-${imageName}`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const takeScreenshot = async () => {
    if (!elementRef.current) return;

    try {
      const dataUrl = await toPng(elementRef.current);
      // Create a temporary link element
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = dataUrl;
      // Trigger download
      link.click();
    } catch (error) {
      console.error("Error taking screenshot:", error);
    }
  };

  // Calculate preview size classes based on frame size
  const getPreviewSizeClasses = () => {
    switch (frameSize) {
      case "small":
        return "p-2 aspect-[5/6]";
      case "large":
        return "p-6 aspect-[5/6]";
      default: // medium
        return "p-4 aspect-[5/6]";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Frame Size Controls */}
      <div className="mb-6 flex justify-center gap-4">
        {Object.keys(FRAME_SIZES).map((size) => (
          <button
            key={size}
            onClick={() => setFrameSize(size)}
            className={`px-4 py-2 rounded-lg ${
              frameSize === size
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {size.charAt(0).toUpperCase() + size.slice(1)} Frame
          </button>
        ))}
      </div>

      {/* Upload Area */}
      <Card
        className={`mb-8 ${isDragging ? "border-blue-500 bg-blue-50" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-6 min-h-48">
          <Camera className="w-12 h-12 text-gray-400 mb-4" />
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Choose Images
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
          </label>
          <p className="mt-2 text-sm text-gray-500">
            or drag and drop images here
          </p>
        </CardContent>
      </Card>

      {/* Polaroid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="transform transition-transform hover:rotate-2 hover:-translate-y-2"
          >
            <div
              className={`bg-white shadow-xl rounded-sm relative group ${getPreviewSizeClasses()}`}
              ref={elementRef}
            >
              <div className="aspect-square mb-4 overflow-hidden relative">
                {/* filter: contrast(110%) brightness(80%) saturate(150%) hue-rotate(-10deg); */}
                <Image
                  src={image.url}
                  alt={image.name}
                  fill
                  className="object-cover"
                  unoptimized // Since we're using object URLs
                />
              </div>
              {/* <p className={`text-center font-handwriting text-gray-700 ${
                frameSize === 'small' ? 'text-xs' : 
                frameSize === 'large' ? 'text-lg' : 
                'text-sm'
              }`}>
                {image.name}
              </p> */}
            </div>
            {/* Download Button */}
            <Button onClick={() => takeScreenshot()} title="Download Polaroid">
              <Download /> Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolaroidUploader;
