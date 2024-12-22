"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";
import PolaroidCard from "@/components/PolaroidCard";

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

      {/* Frame Size Controls */}
      {images.length > 0 && (
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
      )}

      {/* Polaroid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <PolaroidCard
            key={image.id}
            image={image}
            frameSize={getPreviewSizeClasses()}
          />
        ))}
      </div>
    </div>
  );
};

export default PolaroidUploader;
