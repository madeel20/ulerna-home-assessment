'use client';
// ProductContext using React Context + useReducer
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from "react";

export type ProductVariant = {
  id: string;
  color: string;
  size: string;
  image: string;
  available: boolean;
};

interface ProductState {
  selectedVariant: ProductVariant | null;
  quantity: number;
}

const initialState: ProductState = {
  selectedVariant: null,
  quantity: 1,
};

type ProductAction =
  | { type: "SELECT_VARIANT"; payload: ProductVariant }
  | { type: "SET_QUANTITY"; payload: number };

function productReducer(state: ProductState, action: ProductAction): ProductState {
  switch (action.type) {
    case "SELECT_VARIANT":
      return { ...state, selectedVariant: action.payload };
    case "SET_QUANTITY":
      return { ...state, quantity: action.payload };
    default:
      return state;
  }
}

const ProductContext = createContext<{
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
} | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProduct must be used within a ProductProvider");
  return context;
}
