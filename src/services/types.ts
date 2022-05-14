export type TFollowingUser = {
  username: string,
  image: string,
  following: boolean,
  bio?: string,
  isLoading: boolean,
}

export type TFollowingUserProfile = {
  profile: TFollowingUser
}

export type TArticleProperties = {
  author: TFollowingUser,
  body: string,
  createdAt: string,
  description: string,
  favorited: boolean,
  favoritesCount: number,
  slug: string,
  tagList: Array<string> | [],
  title: string,
  updatedAt?: string,
  image?: string,
}

export type TEditingArticleProperties = {
  tagInput: string,
  slug: string,
  title: string,
  description: string,
  image: string,
  body: string,
  tagList: Array<string> | []
}

export type TArticle = {
  article: TArticleProperties
}

export type TEditingArticle = {
  article: TEditingArticleProperties
}
