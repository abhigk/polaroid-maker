import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";

const PolaroidCard = ({ image, polaroidKey, frameSize }) => {
  const elementRef = useRef(null);

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

  return (
    <div
      key={image.id}
      className="transform transition-transform hover:rotate-2 hover:-translate-y-2"
    >
      <div
        className={`bg-white shadow-xl rounded-sm relative group ${frameSize}`}
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
      </div>
      {/* Download Button */}
      <Button onClick={() => takeScreenshot()} title="Download Polaroid">
        <Download /> Download
      </Button>
    </div>
  );
};

export default PolaroidCard;
