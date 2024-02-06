import Image from 'next/image';
import Link from 'next/link';
import { fakeData } from '../utils/fakeData';
import { Article } from '../utils/types';
import SingleArticlePage from './articles/[id]/page';
import ArticleCard from './components/ArticleCard';

export default function Home(props: Article) {
  const articles: Article[] = fakeData;
  // console.log(articles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Neueste Artikel</h1>
        <div>I need to display an article</div>
        {articles.map((article) => {
          return (
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
          );
        })}

        <div>And there is something in a div</div>
      </div>
    </main>
  );
}
