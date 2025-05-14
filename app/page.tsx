'use client';

import ProductDetails from "@/components/ProductDetails";
import {product} from "@/mock";



export default function Home() {
      return <ProductDetails product={product} />
}
