import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';
import SingleArticlePage from '../../app/articles/[id]/page';
import { fakeData } from '../fakeData';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => 'Next.js Image stub',
}));

// jest.mock('next/router', () => {
//   const useRouter = jest.fn();
//   useRouter.mockReturnValue({
//     query: {},
//   });
//   return {
//     __esModule: true,
//     useRouter,
//   };
// });

describe('SingleArticlePage', () => {
  it('renders the single article data correctly based on the props', () => {
    const testArticle = fakeData[0];

    render(<SingleArticlePage params={{ id: testArticle.id }} />);

    expect(screen.getByText(testArticle.headline)).toBeInTheDocument();
    expect(screen.getByText(testArticle.text)).toBeInTheDocument();
  });

  // it('calls notFound when there is no matching id', () => {
  //   const notFound = jest.fn();
  //   render(<SingleArticlePage params={{ id: 'fake-id' }} />);
  //   expect(notFound).toHaveBeenCalled();
  // });
});
