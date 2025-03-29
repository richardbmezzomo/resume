import { useNavigate, useParams } from "react-router-dom"
import { useGitHubIssuesStore } from "@/stores/useGitHubIssuesStore"
import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/tokyo-night-dark.css"
import { ArrowLeft } from "lucide-react"

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const BragDocument = () => {
  const { id } = useParams()
  const { issues, fetchIssues, isLoading } = useGitHubIssuesStore()
	const navigate = useNavigate()

  useEffect(() => {
    if (issues.length === 0) {
      fetchIssues()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const issue = issues.find((issue) => issue.id === Number(id))
  if (isLoading) return <p>Carregando...</p>
  if (!issue) return <p>Issue não encontrada.</p>

  return (
    <div className="p-6 m-10 bg-zinc-900 text-heather rounded-lg">
    	<button
				onClick={() => navigate(-1)}
    		className="flex items-center hover:cursor-pointer hover:underline gap-1 mb-4 text-sm hover:text-heather/80"
			>
				<ArrowLeft />
				Voltar
			</button>
      <h1 className="text-2xl font-bold mb-2">{issue.title}</h1>
      <p className="text-sm text-heather mb-6">
        Criado por {issue.user.login} em{" "}
        {new Date(issue.created_at).toLocaleDateString("pt-BR")}
      </p>

      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            code({ inline, className, children, ...props }: CodeProps) {
              return !inline ? (
                <pre className="bg-zinc-800 p-4 rounded-md overflow-x-auto text-sm mb-4">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className="bg-zinc-700 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              )
            },
            p({ children }) {
              return <p className="mb-4 leading-relaxed">{children}</p>
            },
            ul({ children }) {
              return <ul className="list-disc list-inside mb-4">{children}</ul>
            },
            li({ children }) {
              return <li className="mb-2">{children}</li>
            },
            h2({ children }) {
              return <h2 className="text-xl font-semibold mt-6 mb-2">{children}</h2>
            },
            hr() {
              return <hr className="my-6 border-zinc-700" />
            }
          }}
        >
          {issue.body}
        </ReactMarkdown>
      </div>
    </div>
  )
}
