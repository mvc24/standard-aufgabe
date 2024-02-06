import { NextResponse } from 'next/server';

type StandardApiResponse = {
  articles: string;
};

export function GET(): NextResponse<StandardApiResponse> {
  return NextResponse.json({
    articles: '/api/articles',
  });
}
