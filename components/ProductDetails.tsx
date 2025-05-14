'use client';
import {product} from "@/mock";
import ProductGallery from "../components/ProductGallery";
import VariantSelector from "../components/VariantSelector";
import QuantitySelector from "../components/QuantitySelector";
import AddToCartButton from "../components/AddToCartButton";
import ExpandableSection from "../components/ExpandableSection";
import { useProduct } from "../context/ProductContext";
import React from 'react'

interface ProductDetailsProps {
    product: typeof product;
}

const ProductDetails = ({
    product
}:ProductDetailsProps) => {

    const { state } = useProduct();
    const mainImage = state.selectedVariant?.image || product.images[0];
    
    return (
        <main className="min-h-screen pt-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
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

export default ProductDetails