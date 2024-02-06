import Image from 'next/image';
import React from 'react';
import { Article } from '../../utils/types';

export default function ArticleCard(props: Article) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-xl my-4 image-full">
      <figure className="card rounded-t-xl">
        <Image
          src={props.headerImageUrl}
          alt={props.headline}
          width={1100}
          height={360}
          className="rounded-t-xl"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold pb-2">{props.headline}</h2>
        <h3 className="uppercase pb-2">{props.author}</h3>
        <p className="line-clamp-2 text-left">{props.text}</p>
        <div className="card-actions justify-end ">
          <div className="badge badge-primary">{props.categories}</div>
        </div>
      </div>
    </div>
  );
}
