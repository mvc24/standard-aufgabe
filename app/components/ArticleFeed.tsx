import Link from 'next/link';
import { fakeData } from '../../utils/fakeData';
import { Article } from '../../utils/types';
import ArticleCard from './ArticleCard';

export default function ArticleFeed() {
  return (
    <div className="">
      {fakeData.map((article: Article) => (
        <div key={`article-div-${article.id}`}>
          <Link href={`/articles/${article.id}`}>
            <ArticleCard
              id={article.id}
              headline={article.headline}
              author={article.author}
              text={article.text}
              publicationDate={article.publicationDate}
              categories={article.categories}
              headerImageUrl={article.headerImageUrl}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
