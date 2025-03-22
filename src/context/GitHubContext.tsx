import { createContext, useContext, useEffect, useState } from "react"

interface GitHubUser {
  avatar_url: string,
  location: string,
  company: string,
  login: string,
  html_url: string,
  blog: string,

}

const GitHubContext = createContext<GitHubUser | null>(null)

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<GitHubUser | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/richardbmezzomo")
      .then((res) => res.json())
      .then((data) => {
        const { avatar_url, location, company, login, html_url, blog} = data
        setUser({ avatar_url, location, company, login, html_url, blog})
      })
  }, [])

  return (
    <GitHubContext.Provider value={user}>
      {children}
    </GitHubContext.Provider>
  )
}

export const useGitHub = () => useContext(GitHubContext)
