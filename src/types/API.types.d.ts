import { AxiosPromise } from 'axios';
import {
  TAPIArticle,
  TAPIArticles, TAPIAuth,
  TAPIComment,
  TAPIComments,
  TAPIProfile,
  TAPITags,
  TAPIUser,
  TAPIAuth
} from '../services/api.types';
import { TTags } from './types';

export interface IRegisterUser {
  (username: string, email: string, password: string) : AxiosPromise<TAPIAuth>;
}

export interface ILoginUser {
  (email: string, password: string) : AxiosPromise<TAPIAuth>;
}

export interface IFetchUser {
  () : AxiosPromise<TAPIAuth>;
}

export interface IPatchUser {
  ({
    username, email, password, bio, image,
  }: {
    username?: string,
    email?: string,
    password?: string,
    bio?: string,
    image?:string,}
  ) : AxiosPromise<TAPIAuth>;
}

export interface IFetchArticles {
  (limit?: number,
    offset?: number,
    tag?: string,
    author?: string,
    favorited?: string) : AxiosPromise<TAPIArticles>;
}

export interface IFetchFeed {
  (limit?: number, offset?: number, tag?: string) : AxiosPromise<TAPIArticles>;
}

export interface IFetchArticle {
  (slug: string) : AxiosPromise<TAPIArticle>;
}

export interface IPostArticle {
  (title: string,
    description: string,
    body: string,
    tagList: TTags,
    link?: string,
  ) : AxiosPromise<TAPIArticle>;
}

export interface IDeleteArticle {
  (slug: string) : AxiosPromise<null>;
}

export interface IPatchArticle {
  (slug: string,
    title: string,
    description: string,
    body: string,
    tagList: TTags,
    link?: string,) : AxiosPromise<TAPIArticle>;
}

export interface ILikeArticle {
  (slug: string) : AxiosPromise<TAPIArticle>;
}

export interface IFetchTags {
  () : AxiosPromise<TAPITags>
}

export interface IFetchComments {
  (slug: string) : AxiosPromise<TAPIComments>;
}

export interface IPostComment {
  (slug: string, body: string) : AxiosPromise<TAPIComment>;
}

export interface IDeleteComment {
  (slug: string, id: string) : AxiosPromise<null>;
}

export interface IProfile {
  (username: string) : AxiosPromise<TAPIProfile | null>
}

export {
  TAPIArticle,
  TAPIArticles,
  TAPIComment,
  TAPIComments,
  TAPIProfile,
  TAPITags,
  TAPIUser,
};
