import Error from 'next/error';
import { NextRequest, NextResponse } from 'next/server';
import { fakeData } from '../../../../utils/fakeData';
import { Article } from '../../../../utils/types';

type ArticleResponseBodyGet = { article: Article } | { error: string };

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<ArticleResponseBodyGet>> {
  console.log(params);
  const articleId = params.articleId;
  const article = fakeData.find((article) => article.id === articleId);

  if (!article) {
    return new NextResponse(
      JSON.stringify({
        error: 'Leider konnte der Artikel nicht gefunden werden',
      }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
  return new NextResponse(JSON.stringify({ article }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
