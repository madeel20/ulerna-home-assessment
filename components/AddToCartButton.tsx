'use client';
import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface AddToCartButtonProps {
  price: number;
}

const AddToCartButton = ({ price }: AddToCartButtonProps) => {
  const { state: productState } = useProduct();
  const { dispatch: cartDispatch } = useCart();
  const canAdd = !!productState.selectedVariant;

  const handleAdd = () => {
    if (productState.selectedVariant) {
      cartDispatch({
        type: "ADD_ITEM",
        payload: {
          productId: "prod-1",
          variantId: productState.selectedVariant.id,
          quantity: productState.quantity,
        },
      });
      toast.success("Added to cart!", {
        description: `${productState.quantity} × ${productState.selectedVariant.color} / ${productState.selectedVariant.size}`,
      });
    }
  };

  return (
    <Button
      className="px-6 py-2 font-semibold shadow"
      disabled={!canAdd}
      onClick={handleAdd}
      aria-disabled={!canAdd}
    >
      Add to Cart {price ? `- $${price.toFixed(2)}` : ""}
    </Button>
  );
};

export default AddToCartButton;
