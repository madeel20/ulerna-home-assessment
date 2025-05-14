import { render, screen, fireEvent } from '@testing-library/react';
import AddToCartButton from '../components/AddToCartButton';
import { CartProvider } from '../context/CartContext';
import { ProductProvider } from '../context/ProductContext';

describe('AddToCartButton', () => {
  it('adds an item to the cart', () => {
    render(
      <CartProvider>
        <ProductProvider>
          <AddToCartButton price={99.99} />
        </ProductProvider>
      </CartProvider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Add assertions for cart state or UI feedback
  });
});