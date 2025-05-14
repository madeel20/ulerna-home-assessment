import { render, screen, fireEvent } from '@testing-library/react';
import ProductGallery from '../components/ProductGallery';

describe('ProductGallery', () => {
  it('selects an image when a thumbnail is clicked', () => {
    render(<ProductGallery images={["/shoe/1.webp", "/shoe/2.webp"]} title="Test Product" />);
    const thumbnails = screen.getAllByRole('button', { name: /show image/i });
    fireEvent.click(thumbnails[1]);
    // Add assertion to check if the main image changes
  });
});