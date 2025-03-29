import { useEffect, useState } from "react"
import { GitHubContext } from "./GitHubContext"
import { GitHubUser } from "@/types/github"

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<GitHubUser | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/richardbmezzomo")
      .then((res) => res.json())
      .then((data) => {
        const { avatar_url, location, company, login, html_url, blog } = data
        setUser({ avatar_url, location, company, login, html_url, blog })
      })
  }, [])

  return (
    <GitHubContext.Provider value={user}>
      {children}
    </GitHubContext.Provider>
  )
}

