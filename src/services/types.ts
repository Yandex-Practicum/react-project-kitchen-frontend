export type TFollowingUser = {
  username: string,
  image: string,
  following: boolean,
  bio?: string
}

export type TFollowingUserProfile = {
  profile: TFollowingUser
}

export type TArticleProperties = {
  slug: string,
  title: string,
  description: string,
  image: string,
  body: string,
  tagList: Array<string>,
  tagInput?: string
}

export type TArticle = {
  article: TArticleProperties
}
