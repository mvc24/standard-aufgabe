import Image from 'next/image';
import Link from 'next/link';
import { fakeData } from '../utils/fakeData';
import { Article } from '../utils/types';
import SingleArticlePage from './articles/[articleId]/page';

export default function Home() {
  const articles: Article[] = fakeData;
  console.log(articles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>I have an H1</h1>
        <div>I need to display an article</div>
        {articles.map((article) => {
          return (
            <div key={`article-div-${article.id}`}>
              <Link href={`/articles/${article.id}`} />
              <div>{article.headline}</div>
            </div>
          );
        })}

        <div>And there is something in a div</div>
      </div>
    </main>
  );
}
