import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ArticleCard from '../../app/components/ArticleCard';

describe('ArticleCard Component', () => {
  const articleProps = {
    id: 'guid1',
    headline: 'Eine Ziege Betrachtet Ihren Schatten',
    author: 'Autor:in 1',
    text: 'Lorem ipsum',
    publicationDate: '2023-10-21T14:45:00',
    categories: ['cat1', 'cat2'],
    headerImageUrl: '/images/header-image1.jpg',
  };

  it('renders the data of the article correctly', () => {
    render(<ArticleCard {...articleProps} />);

    expect(screen.getByText(articleProps.headline)).toBeInTheDocument();
    expect(screen.getByText(articleProps.author)).toBeInTheDocument();
    expect(screen.getByText(articleProps.text)).toBeInTheDocument();
    const image = screen.getByAltText(articleProps.headline);
    expect(image).toHaveAttribute('src');
    articleProps.categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});
