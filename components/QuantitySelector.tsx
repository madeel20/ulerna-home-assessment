'use client';
import { useProduct } from "../context/ProductContext";
import { Button } from "./ui/button";

const QuantitySelector = () => {
  const { state, dispatch } = useProduct();
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        aria-label="Decrease quantity"
        onClick={() => dispatch({ type: "SET_QUANTITY", payload: Math.max(1, state.quantity - 1) })}
        disabled={state.quantity <= 1}
      >
        -
      </Button>
      <span className="w-8 text-center" aria-live="polite">{state.quantity}</span>
      <Button
        size="sm"
        variant="outline"
        aria-label="Increase quantity"
        onClick={() => dispatch({ type: "SET_QUANTITY", payload: state.quantity + 1 })}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
