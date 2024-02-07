import { Article } from './types';

export const fakeData: Article[] = [
  {
    id: 'guid1',
    headline: 'Eine Ziege und ihr Schatten',
    author: 'Autor:in 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publicationDate: '2023-10-21T14:45:00',
    categories: ['cat1', 'cat2'],
    headerImageUrl: '/images/header-image1.jpg',
  },
  {
    id: 'guid2',
    headline: 'Die Biene bei der Arbeit',
    author: 'Autor:in 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publicationDate: '2023-10-22T14:45:00',
    categories: ['cat2', 'cat3'],
    headerImageUrl: '/images/header-image2.jpg',
  },
  {
    id: 'guid3',
    headline: 'Das Eichhörnchen beim Kratzen',
    author: 'Autor:in 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publicationDate: '2023-10-23T14:45:00',
    categories: ['cat3', 'cat4'],
    headerImageUrl: '/images/header-image3.jpg',
  },
  {
    id: 'guid4',
    headline: 'Das Eichhörnchen kratzt sich nochmal',
    author: 'Autor:in 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publicationDate: '2023-10-24T14:45:00',
    categories: ['cat4', 'cat5'],
    headerImageUrl: '/images/header-image4.jpg',
  },
  {
    id: 'guid5',
    headline: 'Die Schnecke auf',
    author: 'Autor:in 5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publicationDate: '2023-10-25T14:45:00',
    categories: ['cat5', 'cat6'],
    headerImageUrl: '/images/header-image5.jpg',
  },
];
