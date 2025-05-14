'use client';
import { useEffect } from "react";
import { useProduct, ProductVariant } from "../context/ProductContext";
import { Button } from "./ui/button";

interface VariantSelectorProps {
  variants: ProductVariant[];
}

const VariantSelector = ({ variants }: VariantSelectorProps) => {
  const { state, dispatch } = useProduct();
  const colors = Array.from(new Set(variants.map(v => v.color)));
  const sizes = Array.from(new Set(variants.map(v => v.size)));

  // Find available sizes for selected color
  const selectedColor = state.selectedVariant?.color || colors[0];
  const availableSizes = variants.filter(v => v.color === selectedColor && v.available).map(v => v.size);

  // Find available colors for selected size
  const selectedSize = state.selectedVariant?.size || sizes[0];
  const availableColors = variants.filter(v => v.size === selectedSize && v.available).map(v => v.color);

  useEffect(() => {
      const initialVariant = variants.find(v => v.color === selectedColor && v.size === selectedSize && v.available) ||
        variants.find(v => v.color === selectedColor && v.available) ||
        variants.find(v => v.size === selectedSize && v.available);
      if (initialVariant) {
        dispatch({ type: "SELECT_VARIANT", payload: initialVariant });
      }
    }, [selectedColor, selectedSize, variants, dispatch]);
  

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col gap-4">
      <div>
        <span className="font-semibold">Color:</span>
        <div className="flex gap-2 mt-2">
          {colors.map(color => (
            <Button
              key={color}
              variant={selectedColor === color ? "default" : "outline"}
              className={`px-3 py-1 text-sm ${availableColors.includes(color) ? "" : "opacity-40 cursor-not-allowed"}`}
              disabled={!availableColors.includes(color)}
              onClick={() => {
                const variant = variants.find(v => v.color === color && v.size === selectedSize && v.available) ||
                  variants.find(v => v.color === color && v.available);
                if (variant) dispatch({ type: "SELECT_VARIANT", payload: variant });
              }}
              aria-pressed={selectedColor === color}
            >
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <span className="font-semibold">Size:</span>
        <div className="flex gap-2 mt-2">
          {sizes.map(size => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              className={`px-3 py-1 text-sm ${availableSizes.includes(size) ? "" : "opacity-40 cursor-not-allowed"}`}
              disabled={!availableSizes.includes(size)}
              onClick={() => {
                const variant = variants.find(v => v.size === size && v.color === selectedColor && v.available) ||
                  variants.find(v => v.size === size && v.available);
                if (variant) dispatch({ type: "SELECT_VARIANT", payload: variant });
              }}
              aria-pressed={selectedSize === size}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantSelector;
