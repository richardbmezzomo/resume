export interface GitHubUser {
  avatar_url: string
  location: string
  company: string
  login: string
  html_url: string
  blog: string
}

export interface Repo  {
  name: string
  description: string
  stargazerCount: number
  forkCount: number
  url: string
  primaryLanguage: {
    name: string
    color: string
  } | null
}

