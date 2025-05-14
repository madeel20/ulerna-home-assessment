import { render, screen, fireEvent } from '@testing-library/react';
import VariantSelector from '../components/VariantSelector';
import { ProductProvider } from '../context/ProductContext';

describe('VariantSelector', () => {
  const variants = [
    { id: '1', color: 'Red', size: 'M', image: '1.webp', available: true },
    { id: '2', color: 'Blue', size: 'L', image: '2.webp', available: true },
  ];
  it('selects a color and size', () => {
    render(
      <ProductProvider>
        <VariantSelector variants={variants} />
      </ProductProvider>
    );
    const colorButton = screen.getByRole('button', { name: 'Red' });
    fireEvent.click(colorButton);
    const sizeButton = screen.getByRole('button', { name: 'M' });
    fireEvent.click(sizeButton);
    // Add assertions for selected variant
  });
});