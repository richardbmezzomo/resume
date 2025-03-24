import { EducationItemProps } from "../../types/education"
import { Dot } from "lucide-react"


export const EducationItem = ({ curso, periodo, faculdade }: EducationItemProps) => {
  return (
    <div className="text-heather text-sm">  
        <strong className="flex items-center gap-0.5">
            <Dot />{curso}
        </strong>
      <div className="font-light pl-6 text-[12px]">
        <p>{periodo}</p>
        <p>{faculdade}</p>
      </div>
    </div>
  )
}
