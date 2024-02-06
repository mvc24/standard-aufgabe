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
  // console.log(article.headline);

  return (
    <div className="min-h-dvh px-2">
      <div className="mx-2 my-4 rounded-md pb-8 bg-stone-50">
        <Image
          src={article.headerImageUrl}
          alt={article.headline}
          width={1100}
          height={360}
          className="min-w-full rounded-t-md"
        />
        <div className="px-4 py-4">
          <h1 className="font-sans font-bold text-2xl mb-2 text-stone-900">
            {article.headline}
          </h1>

          <div className="font-serif font-normal font-stone-900">
            {article.text}
          </div>
        </div>
      </div>
    </div>
  );
}
