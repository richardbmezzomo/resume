import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

interface IssueCardProps {
  title: string
  body: string
  created_at: string
  avatar_url: string
}

export const IssueCard = ({ title, body, created_at, avatar_url }: IssueCardProps) => {

  const fullText = body

  const snippet = fullText.length > 125 ? fullText.slice(0, 125) + '... ' : fullText

  return (
    <div className="flex gap-5 bg-graphite items-center px-7 py-8 rounded-2xl">
      <div className="">
         <img
          src={avatar_url}
          alt="Avatar"
          className="w-full max-w-[8rem] h-auto rounded-full"
        /> 
      </div>
      <div className="text-heather flex flex-col gap-1">
        <h3 className="">{title}</h3>
        <p className="pb-7">
          {formatDistanceToNow(new Date(created_at), { addSuffix: true, locale: ptBR })}
        </p>
        <div className="flex gap-3 items-center">
          <p className="">
            {snippet || "Sem descrição disponível..."}
          </p>
          <a href="">Ver mais </a>
        </div>
      </div>
    </div>
  )
}
