'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface ProductGalleryProps {
  images: string[];
  title: string;
  initialImage?: string;
}

const ProductGallery = ({ images, title, initialImage }: ProductGalleryProps) => {
  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Sync selected image with initialImage prop
  useEffect(() => {
    if (initialImage) {
      const idx = images.indexOf(initialImage);
      setSelected(idx >= 0 ? idx : 0);
    }
  }, [initialImage, images]);

  return (
    <div className="relative">
      <div
        ref={imageRef}
        className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={e => {
          const rect = imageRef.current?.getBoundingClientRect();
          if (!rect) return;
          setZoomPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
      >
        <Image
          src={images[selected]}
          alt={title}
          fill
          className="object-contain transition duration-200"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {/* Zoom popup on the right */}
      {zoom && (
        <div
          className="hidden md:block fixed z-30 left-full ml-6 top-0"
          style={{
            width: 320,
            height: 320,
            top: imageRef.current?.getBoundingClientRect().top ?? 0,
            left: (imageRef.current?.getBoundingClientRect().right ?? 0) + 24,
          }}
        >
          <div
            className="w-full h-full rounded-lg border border-gray-300 shadow-lg overflow-hidden bg-white"
            style={{
              backgroundImage: `url(${images[selected]})`,
              backgroundSize: "200% 200%",
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundRepeat: "no-repeat",
            }}
            aria-label="Zoomed image preview"
          />
        </div>
      )}
      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, i) => (
          <button
            key={img}
            className={`w-14 h-14 rounded border-2 ${selected === i ? "border-blue-500" : "border-transparent"} overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onClick={() => setSelected(i)}
            aria-label={`Show image ${i + 1}`}
          >
            <Image src={img} alt={title + " thumbnail"} width={56} height={56} className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
