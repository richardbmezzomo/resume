import { ExperienceItemProps } from "@/types/experiences"
import { Dot } from "lucide-react"


export const ExperienceItem = ({ empresa, periodo, cargo }: ExperienceItemProps) => {
  return (
    <div className="text-heather text-sm">  
        <strong className="flex items-center gap-0.5">
            <Dot />{empresa}
        </strong>
      <div className="font-light pl-6 text-[12px]">
        <p>{periodo}</p>
        <p>{cargo}</p>
      </div>
    </div>
  )
}
