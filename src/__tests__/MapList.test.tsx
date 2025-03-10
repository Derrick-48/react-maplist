import React from 'react';
import { render, screen } from '@testing-library/react';
import MapList from '../MapList';

describe('MapList', () => {
  const mockData = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' }
  ];

  const renderItem = (item: { id: string; name: string }) => {item.name};
  const keyExtractor = (item: { id: string }) => item.id;

  test('renders the correct number of items', () => {
    render(
      
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  test('renders empty component when data is empty', () => {
    render(
      No items}
      />
    );

    expect(screen.getByText('No items')).toBeInTheDocument();
  });

  test('renders header and footer components', () => {
    render(
      Header}
        FooterComponent={Footer}
      />
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});