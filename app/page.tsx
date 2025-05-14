'use client';
import ProductGallery from "../components/ProductGallery";
import VariantSelector from "../components/VariantSelector";
import QuantitySelector from "../components/QuantitySelector";
import AddToCartButton from "../components/AddToCartButton";
import ExpandableSection from "../components/ExpandableSection";
import { useProduct } from "../context/ProductContext";

const product = {
  id: "prod-1",
  title: "Northstar - Men",
  description: `Step into everyday comfort with the Northstar Men's Sneakers – your go-to choice for effortless style and durability. Whether you're heading out for a casual hangout or running daily errands, these shoes blend modern design with all-day support.

Material: Breathable mesh upper with synthetic overlays for added strength

Outsole: Durable rubber sole with anti-slip grip for confident strides

Insole: Cushioned footbed for superior comfort and arch support

Design: Sleek, low-top silhouette with subtle Northstar branding
`,
  images: [
    "/shoe/1.webp",
    "/shoe/2.webp",
  ],
  variants: [
    { id: "v1", color: "Black", size: "M", image: "/shoe/2.webp", available: true },
    { id: "v1", color: "Black", size: "L", image: "/shoe/2.webp", available: true },
    { id: "v1", color: "White", size: "L", image: "/shoe/1.webp", available: true },
    { id: "v1", color: "White", size: "S", image: "/shoe/1.webp", available: true },
    { id: "v1", color: "White", size: "M", image: "/shoe/1.webp", available: true },
  ],
  price: 129.99,
};

export default function Home() {
  const { state } = useProduct();
  const mainImage = state.selectedVariant?.image || product.images[0];
  return (
    <main className="min-h-screen mt-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <section>
          <ProductGallery images={product.images} title={product.title} initialImage={mainImage} />
        </section>
        {/* Product Details */}
        <section className="flex flex-col gap-6 pt-[40px]">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <VariantSelector variants={product.variants} />
          <div className="flex gap-4 items-center">
            <QuantitySelector />
            <AddToCartButton price={product.price} />
          </div>
          <ExpandableSection title="Product Details" content={product.description} />
        </section>
      </div>
    </main>
  );
}
