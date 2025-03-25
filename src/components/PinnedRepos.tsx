import { useEffect, useState } from "react"
import { getPinnedRepos } from "@/services/github"
import { Repo } from "@/types/github"
import { Folder, GitFork, Star } from "lucide-react"


export function PinnedRepos() {
const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    getPinnedRepos().then(setRepos)
  }, [])

  return (
    <div className="grid md:grid-cols-2 gap-7 w-full text-heather">
        {
            repos.map((repo) => (
                        <div className="bg-graphite p-8 rounded-2xl">
            <header className="flex gap-4">
                <Folder />
                <h1 className="">{repo.name}</h1>
            </header>
            <p className="pt-5">{repo.description}</p>
            <footer className="flex items-center justify-between pt-12">
                <div className="flex gap-4">
                    <div className="flex gap-2">
                        <Star />
                        <p>{repo.stargazerCount}</p>
                    </div>
                    <div className="flex gap-2">
                        <GitFork />
                        <p>{repo.forkCount}</p>
                    </div>
                </div>
                {repo.primaryLanguage && (
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
              <div
                className="absolute inset-0 rounded-full opacity-40"
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
              <div
                className="absolute inset-1 rounded-full"
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
            </div>
            <p>{repo.primaryLanguage.name}</p>
          </div>
        )}
            </footer>
        </div>
            ))
        }
    </div>
  )
}
