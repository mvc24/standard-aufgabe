import { fakeData } from '../utils/fakeData';
import { Article } from '../utils/types';
import ArticleFeed from './components/ArticleFeed';

export default function Home(props: Article) {
  const articles: Article[] = fakeData;
  // console.log(articles);

  return (
    <main className="flex justify-center overflow-y-scroll">
      <div>
        <ArticleFeed />
      </div>
    </main>
  );
}
