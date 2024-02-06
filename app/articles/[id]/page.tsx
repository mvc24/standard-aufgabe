import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { fakeData } from '../../../utils/fakeData';
import { Article } from '../../../utils/types';

type Props = {
  params: {
    id: string;
  };
};

export default function SingleArticlePage(props: Props) {
  const article = fakeData.find((article) => article.id === props.params.id);

  if (!article) {
    notFound();
  }
  console.log(article.headline);

  return (
    <div>
      <h1>{article.headline}</h1>
      <Image
        src={article.headerImageUrl}
        alt={article.headline}
        width={1100}
        height={360}
      />
      <div>{article.author}</div>
      <div>{article.text}</div>
    </div>
  );
}
