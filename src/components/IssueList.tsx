import { useEffect } from "react"
import { useGitHubIssuesStore } from "@/stores/useGitHubIssuesStore"
import { IssueCard } from "./IssueCard"

export const IssueList = () => {
  const { issues, fetchIssues, isLoading } = useGitHubIssuesStore()

  useEffect(() => {
    fetchIssues()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <p>Carregando issues...</p>

  return (
    <div className="">
      {issues.map((issue) => (
        <IssueCard
          key={issue.id}
          title={issue.title}
          body={issue.body}
          created_at={issue.created_at}
          avatar_url={issue.user.avatar_url}
        />
      ))}
    </div>
  )
}
