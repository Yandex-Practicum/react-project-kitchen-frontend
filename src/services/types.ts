import { ServerStreamFileResponseOptionsWithError } from "http2";

export type TUser = {
    email: string;
    token: string;
    username: string;
}

export type TAuthor = {
    following: boolean;
    image: string;
    username: string;
}

export type TArticle = {
    author: TAuthor;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: any;
    title: string;
    updatedAt: string;
    articlesCount: number;
}

export type TComment = {
    body: string;
}