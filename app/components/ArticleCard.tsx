import Image from 'next/image';
import React from 'react';
import { Article } from '../../utils/types';

export default function ArticleCard(props: Article) {
  return (
    <div className="card px-2 drop-shadow-xl rounded-md my-4 image-full">
      <figure className="card">
        <Image
          src={props.headerImageUrl}
          alt={props.headline}
          width={1100}
          height={360}
          className="rounded-t-md min-h-fit"
        />
      </figure>
      <div
        className="card-body p-4 rounded-b-md
       bg-stone-50"
      >
        <h2 className="card-title text-2xl font-sans font-semibold pb-2 text-stone-900">
          {props.headline}
        </h2>
        <h3 className="uppercase font-sans font-thin pb-2 text-emerald-950">
          {props.author}
        </h3>
        <p className=" font-serif font-normal text-lg line-clamp-2 text-left text-pretty text-stone-900">
          {props.text}
        </p>
        <div className="mt-3 text-right">
          {props.categories.map((category, index) => (
            <span
              key={index}
              className="badge font-light text-sm px-2 py-1 rounded-full bg-stone-200 mr-2"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
